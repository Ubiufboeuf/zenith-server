import express from 'express'
import { createServer } from 'node:https'
import { createServerOptions } from '@/serverConfig/serverConfig/createOptions'
import { corsMiddleware } from '@/middlewares/cors'
import mocks from 'mocks/products.json'
import { ACCEPTED_ORIGINS } from '@/lib/constants'

console.log(ACCEPTED_ORIGINS)

const app = express()
const port = process.env.PORT ?? 7102
const options = createServerOptions()

app.use(corsMiddleware())

app.get('/products', (req, res) => {
  res.json(mocks)
})

createServer(options, app)
  .listen(port, () => {
    console.log(`\n=== Servidor escuchando en el puerto [:${port}] ===`)
  })
