import Fastify from 'fastify'
import cors from '@fastify/cors'
import { createPools } from './routes/pools/create/function'
import { countPools } from './routes/pools/count/function'
import { countUsers } from './routes/users/count/function'
import { countGuess } from './routes/guesses/count/function'

const start = async () => {
  const fastify = Fastify({
    logger: true
  })

  await fastify.register(cors, {
    origin: true
  })

  fastify.get('/pools/count', countPools)

  fastify.get('/users/count', countUsers)

  fastify.get('/guess/count', countGuess)
  
  fastify.post('/pools', await createPools)

  await fastify.listen({ port: 3333, /*host: '0.0.0.0'*/ })
}

start()
