import Router from "@koa/router";
import { DefaultContext, DefaultState } from 'koa'
import { Paths } from '../config.routes'
import { handlePostSignUp } from './controllers/signUp.controller'
import { handlePostSignIn } from './controllers/signIn.controller'

const authRouter = new Router<DefaultState, DefaultContext>({
  prefix: Paths.Auth,
})

authRouter.post('/signUp', handlePostSignUp)
authRouter.post('/signIn', handlePostSignIn)

export default authRouter
