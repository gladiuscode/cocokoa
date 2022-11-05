import { ApiError } from '../../../shared/models/error/error.model'
import httpStatus from 'http-status'
import { SignUpRequestBody } from '../types/signUp.model'

export const checkPostSignUp = (
  body: any
): SignUpRequestBody => {
  if (!body.email) {
    throw new ApiError(httpStatus.BAD_REQUEST, `Missing parameter email`)
  }

  if (!body.password) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Missing parameter password')
  }

  if (body.password.length < 8) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Password must be at least 8 chars long'
    )
  }

  const passwordCheck = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{6,20}$/,
    'g'
  )
  const isValid = passwordCheck.test(body.password)
  if (!isValid) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Password must contain numbers, lowercase and uppercase letters and at least one special char'
    )
  }

  return body
}
