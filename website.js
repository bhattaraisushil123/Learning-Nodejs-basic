const http = require('http');
const fs = require('fs');

http.createServer((req, resp) => {
    let collectHeaderData = fs.readFileSync("html/header.html", 'utf-8');
    let collectFooterData = fs.readFileSync("html/footer.html", 'utf-8');

    let file = "/home";
    if (req.url !== '/') {
        file = req.url;
    }

    if (req.url === '/style.css') {
        fs.readFile("html/style.css", 'utf-8', (error, data) => {
            if (error) {
                resp.writeHead(500, { "content-type": "text/plain" });
                resp.end("css not found");
                return;
            }
            resp.writeHead(200, { "content-type": "text/css" });
            resp.end(data);
        });
    } else {
        fs.readFile("html" + file + ".html", 'utf-8', (error, data) => {
            if (error) {
                resp.writeHead(500, { "content-type": "text/plain" });
                resp.end("page not found");
                return;
            }
            resp.writeHead(200, { "content-type": "text/html" });
            resp.end(collectHeaderData + data + collectFooterData);
        });
    }
}).listen(3200, () => console.log("Server running on port 3200"));