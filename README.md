# pdf2md Web

Web-based tool to parse PDF files and convert them into Markdown. Not hosted yet.

#### Useful Build Commands

- ```npm install``` Download all necessary npm packages
- ```npm run lint``` Lint the javascript files
- ```npm run test``` Run tests
- ```npm run check``` Lint & Test
- ```npm run build``` Build the dev version
- ```npm run start``` Run the app on an server (useful for loading of worker.js and cmaps)
- ```npm run watch``` Continuously build the project
- ```open build/index.html``` Open the build project in your default browser
- ```npm run release``` Build production version
- ```npm run deploy``` Build production version & move it to the github pages foldler
- ```npm run prepare``` Babelify necessary files and package into the `dist/` directory

## Credits

[pdf-to-markdown](https://github.com/jzillmann/pdf-to-markdown) - original project by Johannes Zillmann  
[pdf.js](https://mozilla.github.io/pdf.js/) - Mozilla's PDF parsing & rendering platform which is used as a raw parser
