import './config'

import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'
import router from './modules/router'

const app = new Koa()

app.use(cors())
app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods())
const port = process.env.PORT || 5050;
app.listen(port, (err) => {
  if (err) throw err
  console.log('Server ready at http://localhost:5050')
  console.log('Process', port || 'development')
})