import { hash } from 'bcrypt'
import prismaClient from '../../services/prisma.service'
import {
  IUserRepository,
  IUserRepositoryMethodParams,
} from './user.repository.types'

class UserRepository implements IUserRepository {
  async insert(data: IUserRepositoryMethodParams<'insert'>) {
    const hashedPassword = await hash(data.password, 10)
    await prismaClient.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
      },
    })
  }
  async select(data: IUserRepositoryMethodParams<'select'>) {
    return prismaClient.user.findUnique({
      where: {
        [data.key]: data.value,
      },
    })
  }
  async delete(email: IUserRepositoryMethodParams<'delete'>) {
    await prismaClient.user.delete({
      where: {
        email,
      },
    })
  }
  async update(data: IUserRepositoryMethodParams<'update'>) {
    await prismaClient.user.update({
      data: {
        [data.key]: data.value,
      },
      where: {
        email: data.email,
      },
    })
  }
}

const userRepository = new UserRepository();

export default userRepository
