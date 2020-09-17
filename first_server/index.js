const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer( (req, res) => {
    const { url } = req;

    if(url === '/translation') {
        const translations = {
            1: 'one',
            2: 'two',
            3: 'three'
        }

        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(translations));
        res.end();
    }

    res.end('Hi There!');
});

server.listen(port, hostname, () => {
    console.log(`Server running at ${hostname} Listening on port ${port}`);
});