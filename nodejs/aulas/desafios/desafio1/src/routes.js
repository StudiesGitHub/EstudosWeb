import { Database } from "./database.js"
import { randomUUID } from 'node:crypto'  
import { buildRoutePath } from './utils/build-route-path.js'

const database = new Database()

export const routes = [
    
    {
        method: 'GET',
        path: buildRoutePath('/tasks'),
        handler: (req, res) => {
            const tasks = database.select('tasks')

            return res
            .setHeader('Content-type', 'application/json')
            .end(JSON.stringify(tasks))
        }
    },
    {
        method: 'POST',
        path: buildRoutePath('/tasks'),
        handler: (req, res) => {
            const task = ({
                id:randomUUID(),
                title:'Task1',
                description:'Descricao1',
                completed_at:'20/01/2024',
                created:'21/01/2024',
                updated:'22/01/2024'
                
            })
            database.insert('tasks', task)

            return res.end('Task criada com sucesso')
        }
    },
    {
        method: 'PUT',
        path: buildRoutePath('/tasks'),
        handler: (req, res) => {
            return res.end('Task atualizada com sucesso')
        }
    },
    {
        method: 'DELETE',
        path: buildRoutePath('/tasks/:id'),
        handler: (req, res) => {
            const { id } = req.params

            database.delete('tasks', id)

            return res.writeHead(204).end()
        }
    },
    {
        method: 'PATCH',
        path: buildRoutePath('/tasks'),
        handler: (req, res) => {
            return res.end('Task modificada com sucesso')
        }
    }
]