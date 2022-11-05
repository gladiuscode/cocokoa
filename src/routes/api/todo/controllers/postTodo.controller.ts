import todoRepository from '../../../../core/repositories/todo/todo.repository'
import { checkPostTodo } from '../validators/postTodo.validator'
import {PostTodoContext} from "../types/postTodos.model";
import httpStatus from "http-status";

export const handlePostTodo = async (ctx: PostTodoContext) => {
  const todo = checkPostTodo(ctx.request.body)

  await todoRepository.insert({ user: ctx.user, todo })

  ctx.status = httpStatus.CREATED;
  ctx.body = {
    success: true,
    message: 'Todo created successfully.',
    data: undefined
  }
}
