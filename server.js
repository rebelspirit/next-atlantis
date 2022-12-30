// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('api/database/database.json');
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
// server.get('/discover/movie', (req, res) => {
//     res.jsonp({ "id": 1, "test": "this is test" })
// });

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.createdAt = Date.now()
    }
    // Continue to JSON Server router
    next();
});

// Use default router, for mounting JSON Server on another endpoint example: server.use('/api', router)
server.use(router)
server.listen(8080, () => {
    console.log('Server on air')
});