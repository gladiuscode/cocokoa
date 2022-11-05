import { sign, verify } from 'jsonwebtoken'
import { getEnv } from './env.service'

const create = async (id: number) => {
  const secret = getEnv('secret')
  return sign({ id }, secret, { expiresIn: '1h' })
}

const validate = async (token: string) => {
  const secret = getEnv('secret')
  return verify(token, secret)
}

const jwtService = {
  create,
  validate,
}

export default jwtService
