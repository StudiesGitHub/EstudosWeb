export async function json(req, res) {
    const buffers = []

    for await (const chunk of req) {
        buffers.push(chunk)
    }

    try {
        req.body = JSON.parse(Buffer.concat(buffers).toString()) //JSON.parse() tranforma a requisicao em um objeto
    } catch {
        req.body = null
    }

    res.setHeader('Content-type', 'application/json')
}