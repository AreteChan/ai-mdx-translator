# AI MDX Translator Extension

## Overview

Welcome to the AI MDX Translator! This handy VS Code extension helps you translate your markdown (.md) and MDX (.mdx) files with the power of AI. We've designed it to preserve all your carefully crafted markdown formatting while translating your content into your desired language.

## Features

- ✨ Effortlessly translate your MD and MDX files to any language you need
- 🎯 Rest easy knowing all your markdown formatting, code blocks, links, and special characters stay intact
- 💾 Keep things organized with customizable output directories for your translated files

## Installation

Getting started is easy! Just follow these simple steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/aretechan/ai-mdx-translator.git
    ```
2. Navigate to the extension directory:
    ```sh
    cd ai-mdx-translator
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Open the project in VS Code:
    ```sh
    code .
    ```
5. Press `F5` to launch the extension and you're ready to go!

## Configuration

Let's get your extension set up perfectly for your needs. Head to the settings and customize these options:

- `mdxTranslator.apiKey`: Your AI API key (don't worry, we keep it secure!)
- `mdxTranslator.modelURL`: The URL of the AI model you'd like to use
- `mdxTranslator.modelName`: The name of your preferred AI model
- `mdxTranslator.mdxPath`: Where can we find your MDX files?
- `mdxTranslator.outputPath`: Where would you like us to save your translated files?
- `mdxTranslator.targetLanguage`: What language would you like to translate to? (we default to `en-GB` if you don't specify)

## Usage

Using the extension is a breeze:

1. Open the command palette with `Ctrl+Shift+P` (or `Cmd+Shift+P` if you're on a Mac)
2. Type and select `Translate Markdown Files`
3. Sit back and watch as your files get translated while maintaining all their original formatting!

## Inspiration

This project was inspired by [ai-translate-readme](https://github.com/wukaipeng-dev/ai-translate-readme). Thanks to the author!

## License

This project is shared under the MIT License. Feel free to check out the [LICENSE](LICENSE) file for all the details.

Happy translating! 🌍✨
