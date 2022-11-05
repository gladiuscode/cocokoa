import { Middleware } from 'koa'
import { ApiError } from '../../models/error/error.model'
import httpStatus from 'http-status'
import jwtService from '../../../core/services/jwt.service'

const checkJwtValidation = async (token: string) => {
  try {
    return jwtService.validate(token);
  } catch (error) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid token')
  }
}

export const authMiddleware = (): Middleware => async (ctx, next) => {
  const authHeader = ctx.header['authorization']
  if (!authHeader) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Missing authorization header')
  }

  const token = authHeader.replace('Bearer', '').trim()

  const payload = await checkJwtValidation(token);
  if (typeof payload === 'string' || !payload.id) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Unknown token payload')
  }

  ctx.decodedToken = payload;
  await next()
}
