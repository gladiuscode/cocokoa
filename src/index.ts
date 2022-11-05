import Koa from 'koa'
import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'
import { getEnv, loadEnvs } from './core/services/env.service'
import { errorMiddleware } from './shared/middlewares/error/error.middleware'
import authRouter from "./routes/auth/auth.route";
import apiRouter from "./routes/api/api.route";

loadEnvs()

const app = new Koa()

// ** PLUGINS ** //
app.use(logger())
app.use(bodyParser())

// ** MIDDLEWARES ** //
app.use(errorMiddleware())

// ** ROUTES ** //
app.use(authRouter.routes())
app.use(apiRouter.routes())

app.listen(getEnv('serverPort'), async () => {
  console.log(`Server ready on port ${getEnv('serverPort')}`)
})
