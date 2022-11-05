import todoRepository from '../../../../core/repositories/todo/todo.repository'
import {checkPutTodo} from "../validators/putTodo.validator";
import {PutTodoContext} from "../types/putTodos.model";
import {ApiError} from "../../../../shared/models/error/error.model";
import httpStatus from "http-status";

export const handlePutTodo = async (ctx: PutTodoContext) => {
  const id = Number(ctx.params.id);
  if (isNaN(id)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Id param must be a valid todo id')
  }
  const todo = checkPutTodo(ctx.request.body)

  await todoRepository.update({ id, data: todo })

  ctx.body = {
    success: true,
    message: 'Todo updated successfully.',
    data: undefined
  }
}
