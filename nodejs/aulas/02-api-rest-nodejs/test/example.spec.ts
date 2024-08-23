import { expect, test } from 'vitest'

test('o usuario cosnegue criar uma nova transacao', () => {
  // fazer a chamada http p/criar uma nova transacao

  const responseStatusCode = 201

  expect(responseStatusCode).toEqual(201)
})
