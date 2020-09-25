const { resolve } = require('path');
const { writeFile } = require('fs');
const { promisify } = require('util');
const manifest = require('../static/build/manifest.json');

async function main() {
    const staticPath = resolve(__dirname, '..', 'static');
    try {
        const template = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Chat</title>
        <meta name="description" content="Chat app" />
        <meta name="author" content="Roope Karhapää" />
        <link rel="stylesheet" href="/build${manifest['main.css']}" />
    </head>
    <body>
        <div id="app"></div>
        <script src="/build${manifest['runtime.js']}"></script>
        <script src="/build${manifest['vendor.js']}"></script>
        <script src="/build${manifest['main.js']}"></script>
    </body>
</html>
        `;
        await promisify(writeFile)(resolve(staticPath, 'index.html'), template);
    } catch(error) {
        console.log(error);
    }
};

main();
