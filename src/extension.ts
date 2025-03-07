import * as vscode from "vscode";
import axios from "axios";
import path from "path";
import * as fs from "fs";

// This method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "mdxTranslator" is now active!');

  try {
    const disposable = vscode.commands.registerCommand(
      "aiMdxTranslator.Translate",
      async () => {
        // Get the configuration settings
        const config = vscode.workspace.getConfiguration("mdxTranslator");
        const workspaceFolder = vscode.workspace.workspaceFolders
          ? vscode.workspace.workspaceFolders[0].uri.fsPath
          : undefined;
        const inputPath = config.get<string>("mdxPath") || workspaceFolder!;
        let outputPath = config.get<string>("outputPath") || workspaceFolder!;

        // Ensure outputPath is an absolute path
        if (!path.isAbsolute(outputPath) && workspaceFolder) {
          outputPath = path.join(workspaceFolder, outputPath);
        }

        const apiKey = config.get<string>("apiKey");
        if (!apiKey) {
          vscode.window.showErrorMessage(
            "💥Please set your API key in the settings!"
          );
          return;
        }

        const modelURL = config.get<string>("modelURL");
        if (!modelURL) {
          vscode.window.showErrorMessage(
            "💥Please set the AI model URL in the settings!"
          );
          return;
        }

        const modelName = config.get<string>("modelName");
        if (!modelName) {
          vscode.window.showErrorMessage(
            "💥Please set the AI model name in the settings!"
          );
          return;
        }

        const targetLanguage = config.get<string>("targetLanguage") || "en-GB";

        // Get all markdown files in the input path
        if (inputPath) {
          const files = await vscode.workspace.findFiles(
            new vscode.RelativePattern(inputPath, "*.{md,mdx}")
          );
          for (const file of files) {
            const document = await vscode.workspace.openTextDocument(file);
            const fileName = path.basename(document.fileName); // Extract the file name

            // Show Process
            vscode.window.withProgress(
              {
                location: vscode.ProgressLocation.Notification,
                title: `Translating ${fileName}...`,
                cancellable: false,
              },
              async (progress) => {
                const prompt = `Please translate the following markdown content to ${targetLanguage}. 
                  Preserve all markdown formatting and keep any code blocks, links, and special characters intact.
                  Only translate the text content. Please translate the text to match natural expressions in the target language:
                  
                  ${document.getText()}`;

                try {
                  const res = await axios.post(
                    modelURL,
                    {
                      model: modelName,
                      messages: [
                        {
                          role: "user",
                          content: prompt,
                        },
                      ],
                    },
                    {
                      headers: {
                        Authorization: `Bearer ${apiKey}`,
                        "Content-Type": "application/json",
                      },
                    }
                  );

                  const translatedText = res.data.choices[0].message.content;

                  // Create the output directory if it doesn't exist
                  if (!fs.existsSync(outputPath)) {
                    fs.mkdirSync(outputPath, { recursive: true });
                  }

                  // Extract the file name and extension
                  const parsedFileName = path.parse(fileName);
                  const nameWithoutExt = parsedFileName.name;
                  const extension = parsedFileName.ext;

                  // Create the new file name
                  const newFileName = `${nameWithoutExt}.${targetLanguage}${extension}`;
                  const outputFilePath = path.join(outputPath, newFileName);

                  // Write the translated content to a new file
                  await vscode.workspace.fs.writeFile(
                    vscode.Uri.file(outputFilePath),
                    Buffer.from(translatedText, "utf8")
                  );

                  vscode.window.showInformationMessage(
                    `Translated file saved to ${outputFilePath}`
                  );
                } catch (error: any) {
                  console.error("Error during translation:", error);
                  vscode.window.showErrorMessage(
                    `Error during translation: ${error.message}`
                  );
                }
              }
            );
          }
        }
      }
    );

    context.subscriptions.push(disposable);
  } catch (error) {
    console.error(error);
    vscode.window.showErrorMessage(`💥Error translating：${error}`);
  }
}

// This method is called when your extension is deactivated
export function deactivate() {}
