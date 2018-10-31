import next from 'next'
import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import helmet from 'helmet'

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: 'src/client' })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())
  server.use(helmet())
  server.use(compression())

  server.get('/a', (req, res) => app.render(req, res, '/b', req.query))

  server.get('/b', (req, res) => app.render(req, res, '/a', req.query))

  server.get('/posts/:id', (req, res) =>
    app.render(req, res, '/posts', { id: req.params.id })
  )

  server.get('*', (req, res) => handle(req, res))

  server.listen(port, err => {
    if (err) throw err
    /* tslint:disable-next-line no-console */
    console.log(`> Ready on http://localhost:${port}`)
  })
})
