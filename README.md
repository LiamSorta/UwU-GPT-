# UwU Translator Chrome Extension

**Disclaimer: This is a terrible plugin. It was made in 10 minutes using GPT. I didn't even write this readme.**

A simple Chrome extension that translates the text content of a web page into UwU-style using OpenAI's GPT-3.5 Turbo.

## Prerequisites

To use this extension, you will need an API key from OpenAI. You can get one by signing up at [https://beta.openai.com/signup/](https://beta.openai.com/signup/). Please note that using the API may incur costs, depending on your usage.

## Installation

1. Clone this repository or download it as a ZIP file.
2. Extract the ZIP file to a folder on your computer.
3. Open the Chrome browser, and navigate to [chrome://extensions](chrome://extensions).
4. Enable "Developer mode" in the top right corner.
5. Click the "Load unpacked" button, and select the folder containing the extracted files.

## Configuration

Before using the extension, you need to insert your OpenAI API key:

1. Open the `background.js` file in a text editor.
2. Replace `<YOUR_API_KEY>` with your actual OpenAI API key:

```javascript
const openaiApiKey = '<YOUR_API_KEY>';
```

3. Save the changes and reload the extension in the Chrome extensions page.

## Usage

After installing and configuring the extension, it will automatically translate the text content of any web page you visit into UwU-style. Please note that the translation may not be perfect, and the formatting might be affected.

## License

This project is released under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! If you find any issues or have suggestions, feel free to open an issue or submit a pull request on GitHub.
