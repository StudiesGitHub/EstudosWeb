import http from 'node:http'

const server = http.createServer((req, res) => {
   const {method, url} = req

   if (method === 'GET' && url ==='/users') {
    return res.end('Lista de Tasks')
   }

   if (method === 'POST' && url ==='/users') {
    return res.end('Task criada com sucesso')
   }

}) 



server.listen(3333)