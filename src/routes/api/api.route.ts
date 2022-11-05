import Router from "@koa/router";
import { DefaultState } from 'koa'
import { Paths } from '../config.routes'
import { authMiddleware } from '../../shared/middlewares/auth/auth.middleware'
import { ApiRouterContext } from './api.types'
import todoRouter from "./todo/todo.route";
import {userMiddleware} from "../../shared/middlewares/auth/user.middleware";

const apiRouter = new Router<DefaultState, ApiRouterContext>({
  prefix: Paths.Api,
})

apiRouter.use(authMiddleware())
apiRouter.use(userMiddleware())

apiRouter.use(todoRouter.routes());

export default apiRouter
