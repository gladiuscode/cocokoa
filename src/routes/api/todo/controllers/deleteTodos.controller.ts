import todoRepository from '../../../../core/repositories/todo/todo.repository'
import {checkDeleteTodos} from "../validators/deleteTodos.validator";
import {DeleteTodosContext} from "../types/deleteTodos.model";

export const handleDeleteTodos = async (ctx: DeleteTodosContext) => {
  const ids = checkDeleteTodos(ctx.request.body)

  await todoRepository.delete({ user: ctx.user, ids })

  ctx.body = {
    success: true,
    message: 'Todos deleted successfully.',
    data: undefined
  }
}
