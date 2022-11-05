import { Middleware } from 'koa'
import { ApiError } from '../../models/error/error.model'
import httpStatus from 'http-status'
import userRepository from "../../../core/repositories/user/user.repository";

const getUserFromDecodedToken = async (value: number) => {
  const user = await userRepository.select({ key: 'id', value })
  if (!user) {
    throw new ApiError(httpStatus.BAD_REQUEST, "User doesn't exist")
  }
  return user;
}

export const userMiddleware = (): Middleware => async (ctx, next) => {
  ctx.user = await getUserFromDecodedToken(ctx.decodedToken.id);
  await next()
}
