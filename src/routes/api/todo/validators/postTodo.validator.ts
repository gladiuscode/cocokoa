import {ApiError} from "../../../../shared/models/error/error.model";
import httpStatus from "http-status";
import {PostTodoRequestBody} from "../types/postTodos.model";

export const checkPostTodo = (body: any): PostTodoRequestBody => {
  if (!body.title) {
    throw new ApiError(httpStatus.BAD_REQUEST, `Missing title`)
  }

  if (!body.content) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Missing content')
  }

  return body
}
