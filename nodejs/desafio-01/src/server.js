import { randomUUID } from 'node:crypto'
import http from 'node:http'
import { Database } from './database.js'

// const tasks = []

const database = new Database()

const server = http.createServer((req, res) => {
    const { method, url } = req

    if (method === 'GET' && url === '/tasks') {
        const tasks = database.select('tasks')

        return res.setHeader('Content-type', 'application/json')
            .end(JSON.stringify(tasks))
    }

    if (method === 'POST' && url === '/tasks') {
        const task = {
            id: randomUUID(),
            title: 'Estudar',
            description: 'estudar...',
            completed_at: new Date(),
            updated_at: new Date()
        }

        database.insert('tasks', task)

        return res.end('Tarefa criada com sucesso')
    }

    if (method === 'PUT' && url === '/tasks:id') {
        return res.end('Tarefa atualizada com sucesso')
    }

    if (method === 'DELETE' && url === '/tasks:id') {
        return res.end('Tarefa deletada')
    }

    if (method === 'PATCH' && url === '/tasks/:id/complete') {

        return res.end('Campo da tarefa atualizado com sucesso')
    }
    return res.end('Hellow')

})

server.listen(3333)