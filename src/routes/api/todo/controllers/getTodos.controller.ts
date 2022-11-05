import todoRepository from '../../../../core/repositories/todo/todo.repository'
import {GetTodosContext} from "../types/getTodos.model";

export const handleGetTodos = async (ctx: GetTodosContext) => {
  const data = await todoRepository.select({ user: ctx.user })

  ctx.body = {
    success: true,
    message: 'Get todos completed successfully.',
    data,
  }
}
