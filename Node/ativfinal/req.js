const http = require('http');

const options = {
    host: 'localhost',
    port: 3000,
    path: '/',
    method: 'GET'
};

const request = http.request(options, response => {
    console.log(`STATUS: ${response.statusCode}`);
    let content = '';
    response.on('data', chunk => content += chunk.toString());

    response.on('end', () => console.log(content));
});

request.end();