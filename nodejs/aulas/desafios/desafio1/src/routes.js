export const routes = [
    {
        method: 'GET',
        path: '/users',
        handler: (req, res) => {
            return res.end('Lista de tasks')
        }
    },
    {
        method: 'POST',
        path: '/users',
        handler: (req, res) => {
            return res.end('Task criada com sucesso')
        }
    }
]