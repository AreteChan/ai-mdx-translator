# AI MDX 翻译扩展插件

## 概述

欢迎使用 AI MDX 翻译器！这个便捷的 VS Code 扩展插件能够使用 AI 帮助您翻译 markdown (.md) 和 MDX (.mdx) 文件。我们精心设计，以确保在翻译内容时保留您精心构建的 markdown 格式。

## 功能特性

- ✨ 轻松将您的 MD 和 MDX 文件翻译成所需任何语言
- 🎯 放心使用，所有 markdown 格式、代码块、链接及特殊字符都将保持原样
- 💾 使用可定制的输出目录来整理翻译后的文件

## 安装

开始使用非常简单，只需按照以下步骤操作：

1. 克隆仓库：
    ```sh
    git clone https://github.com/yourusername/ai-mdx-translator.git
    ```
2. 进入扩展程序目录：
    ```sh
    cd ai-mdx-translator
    ```
3. 安装依赖项：
    ```sh
    npm install
    ```
4. 在 VS Code 中打开项目：
    ```sh
    code .
    ```
5. 按下 `F5` 启动扩展程序，您就准备好了！

## 配置

让我们根据您的需求完美设置扩展程序。前往设置并自定义以下选项：

- `mdxTranslator.apiKey`：您的 AI API 密钥（放心，我们会保证其安全！）
- `mdxTranslator.modelURL`：您希望使用的 AI 模型的 URL
- `mdxTranslator.modelName`：您希望使用的 AI 模型名称
- `mdxTranslator.mdxPath`：我们能找到您的 MDX 文件的路径是什么？
- `mdxTranslator.outputPath`：您希望我们将翻译后的文件保存到何处？
- `mdxTranslator.targetLanguage`：您想要翻译成哪种语言？（如果您不指定，默认为 `en-GB`）

## 使用方法

使用该扩展程序非常简单：

1. 使用 `Ctrl+Shift+P` 打开命令面板（如果您使用的是 Mac，则按 `Cmd+Shift+P`）
2. 输入并选择 `Translate Markdown Files`
3. 坐下来，看着您的文件在保留所有原始格式的情况下被翻译！

## 许可证

此项目遵循 MIT 许可证进行共享。您可以自由查看 [LICENSE](LICENSE) 文件了解所有细节。

祝您翻译愉快！🌍✨