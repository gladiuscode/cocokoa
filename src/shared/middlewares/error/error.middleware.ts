import { Middleware } from 'koa'
import { ApiError } from '../../models/error/error.model'

const parse = (error: unknown) => {
  if (error instanceof ApiError) {
    return error
  }
  return new ApiError()
}

export const errorMiddleware = (): Middleware => async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    console.warn('error: ', error)
    const apiError = parse(error)
    ctx.status = apiError.status
    ctx.message = apiError.message
  }
}
