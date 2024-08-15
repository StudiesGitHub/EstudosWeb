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
    },
    {
        method: 'PUT',
        path: '/users',
        handler: (req, res) => {
            return res.end('Task atualizada com sucesso')
        }
    },
    {
        method: 'DELETE',
        path: '/users',
        handler: (req, res) => {
            return res.end('Task deleteda com sucesso')
        }
    },
    {
        method: 'PATCH',
        path: '/users',
        handler: (req, res) => {
            return res.end('Task modificada com sucesso')
        }
    }
]