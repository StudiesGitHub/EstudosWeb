//const http = require('http') padrao de importacao CommonJS => utiliza o require(padrao mais antigo e pouco utilizado)
import http from 'node:http' //importacao atraves de ESMODULES

import { json } from './middlewares/json.js'
import { routes } from './routes.js'
import { extractQueryParams } from './utils/extract-query-params.js'


// GET => Buscar um recurso do back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar uma informacao unica/especifica de um recurso no back-end
// DELETE => Deletar um recurso do back-end

// Cabecalhos (Requisicao/resposta) => Metadados / da informacoes de como o dado pode/deve ser interpretado pelo front end

const server = http.createServer(async (req, res) => {
    const { method, url } = req

    await json(req, res)

    const route = routes.find(route => {
        return route.method === method && route.path.test(url)
    })

    if (route) {
        const routeParams = req.url.match(route.path)

        const { query, ...params } = routeParams.groups

        req.params = params
        req.query = query ? extractQueryParams(query) : {}



        return route.handler(req, res)
    }

    return res.writeHead(404).end()
})

server.listen(3333)
