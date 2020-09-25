const { resolve } = require('path');
const { writeFile } = require('fs');
const { promisify } = require('util');

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
    </head>
    <body>
        <div id="app"></div>
        <script src="/build/runtime.bundle.js"></script>
        <script src="/build/vendor.bundle.js"></script>
        <script src="/build/main.bundle.js"></script>
    </body>
</html>
        `;
        await promisify(writeFile)(resolve(staticPath, 'index.html'), template);
    } catch(error) {
        console.log(error);
    }
};

main();