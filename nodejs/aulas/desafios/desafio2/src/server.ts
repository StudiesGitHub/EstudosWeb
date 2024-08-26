import fastify from 'fastify'

const app = fastify()

app.get('/meal', () => {
  return 'Refeicoes listadas'
})

app.post('/meal', () => {
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
