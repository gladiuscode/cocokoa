import { SignUpContext } from '../types/signUp.model'
import { checkPostSignUp } from '../validators/signUp.validator'
import userRepository from '../../../core/repositories/user/user.repository'
import { ApiError } from '../../../shared/models/error/error.model'
import httpStatus from 'http-status'

export const handlePostSignUp = async (ctx: SignUpContext) => {
  const { email, password } = await checkPostSignUp(ctx.request.body)

  const isAlreadyRegistered = await userRepository.select({ key: 'email', value: email })
  if (isAlreadyRegistered) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email is taken')
  }

  await userRepository.insert({ email, password })

  // const { uuid, expiresAt } = await sessionRepository.session.create(username)
  //
  // const date = dayjs(expiresAt).toDate()
  // ctx.cookies.set('session_uuid', uuid, { httpOnly: true, expires: date })

  ctx.body = {
    success: true,
    message: 'SignUp completed successfully.',
    data: undefined,
  }
}
