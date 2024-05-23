import axios from 'axios'

import { env } from '@/env'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true, // TODO: isso faz os cookies do fron-end serem disponiveis para o back end, ai o back end cosnegue determianr se o usuario esta logado ou nao
})
// TODO: o bloco abaixo pega as configs da requisicao e as retorna sem alteracao nenhuma, apenas adicionando um delay para simualr uma internet lenta
// if (env.VITE_ENABLE_API_DELAY) {
//   api.interceptors.request.use(async (config) => {
//     await new Promise((resolve) => setTimeout(resolve, 2000))

//     return config
//   })
// }
