const server = require('./server');

const PORT = process.env.PORT || 5000;

server.listeng(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});
