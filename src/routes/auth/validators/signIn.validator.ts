import { ApiError } from '../../../shared/models/error/error.model'
import httpStatus from 'http-status'
import { SignInRequestBody } from '../types/signIn.model'

export const checkPostSignIn = (
  body: any
): SignInRequestBody => {
  if (!body.email) {
    throw new ApiError(httpStatus.BAD_REQUEST, `Missing parameter email`)
  }

  if (!body.password) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Missing parameter password')
  }

  return body
}
