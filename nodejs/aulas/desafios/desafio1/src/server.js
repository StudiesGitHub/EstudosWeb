import http from 'node:http'

import { routes } from './routes.js'

const server = http.createServer((req, res) => {
   const {method, url} = req

//    if (method === 'GET' && url ==='/users') {
//     return res.end('Lista de Tasks')
//    }

//    if (method === 'POST' && url ==='/users') {
//     return res.end('Task criada com sucesso')
//    }
const route = routes.find(route => {
    return route.method === method
})
if (route) {
    return route.handler(req, res)
}


}) 



server.listen(3333)