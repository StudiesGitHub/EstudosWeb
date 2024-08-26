import fastify from 'fastify'
import { z } from 'zod'
import { knex } from './database'

const app = fastify()

app.get('/meal', async () => {
  const tables = await knex('sqlite_schema').select('*')

  return tables
})

app.post('/meal', () => {
  const createTransactionBodySchema = z.object({
    idUser: z.string(),
    name: z.string(),
    description: z.string(),
    dateAndTime: z.string(),
    onTheDiet: z.enum(['Yes', 'No']),
  })

  const meal = {
    IdUser: '1',
    name: 'AO MOSSO',
    description: 'description1',
    dateAndTime: '22/04/2024 10:15 AM',
    onTheDiet: 'true',
  }

  return meal
})

app.post('/meal/user', () => {
  return 'Usuario criado'
})

app.patch('/meal/update', () => {
  return 'Refeicao atualizada '
})

app.delete('/meal/remove', () => {
  return 'Refeicao removida'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
