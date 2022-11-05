import prismaClient from '../../services/prisma.service'
import {
  ITodoRepository,
  ITodoRepositoryMethodParams,
} from './todo.repository.types'

class TodoRepository implements ITodoRepository {
  async insert({ user, todo }: ITodoRepositoryMethodParams<'insert'>) {
    await prismaClient.todo.create({
      data: {
        title: todo.title,
        content: todo.content,
        userId: user.id,
      }
    });
  }
  async select({ user, ids = [] }: ITodoRepositoryMethodParams<'select'>) {
    if (!ids.length) {
      return prismaClient.todo.findMany({
        where: {
          userId: user.id
        }
      })
    }

    return prismaClient.todo.findMany({
      where: {
        userId: user.id,
        id: {
          in: ids,
        },
      },
    })
  }
  async delete({ user, ids }: ITodoRepositoryMethodParams<'delete'>) {
    await prismaClient.todo.deleteMany({
      where: {
        userId: user.id,
        id: {
          in: ids
        },
      },
    })
  }
  async update({ id, data }: ITodoRepositoryMethodParams<'update'>) {
    await prismaClient.todo.update({
      data,
      where: {
        id,
      },
    })
  }
}

const todoRepository = new TodoRepository();

export default todoRepository;
