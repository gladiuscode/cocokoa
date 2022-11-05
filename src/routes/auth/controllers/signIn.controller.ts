import { SignInContext } from '../types/signIn.model'
import { checkPostSignIn } from '../validators/signIn.validator'
import { ApiError } from '../../../shared/models/error/error.model'
import httpStatus from 'http-status'
import userRepository from '../../../core/repositories/user/user.repository'
import { compare } from 'bcrypt'
import jwtService from '../../../core/services/jwt.service'

export const handlePostSignIn = async (ctx: SignInContext) => {
  const { email, password } = await checkPostSignIn(ctx.request.body)

  const user = await userRepository.select({ key: 'email', value: email })
  if (!user) {
    throw new ApiError(httpStatus.BAD_REQUEST, "User doesn't exist")
  }

  const valid = await compare(password, user.password)
  if (!valid) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Wrong email/password given')
  }

  const token = await jwtService.create(user.id)

  ctx.body = {
    success: true,
    message: 'SignIn completed successfully.',
    data: {
      token,
    },
  }
}
