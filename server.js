const jsonServer = require('json-server')

const server = jsonServer.create()

const router = jsonServer.router('db.json')

const middlewres = jsonServer.defaults()

const port = process.env.PORT || 3200

server.use(middlewres)
server.use(router)

server.listen(port)