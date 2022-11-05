import {ApiError} from "../../../../shared/models/error/error.model";
import httpStatus from "http-status";
import {DeleteTodosRequestBody} from "../types/deleteTodos.model";

export const checkDeleteTodos = (body: any): DeleteTodosRequestBody => {
  if (!Array.isArray(body)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Payload must be an array')
  }

  if (!body.length) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Payload must contain at least one id');
  }

  const checkEachId = (id: any, index: number): id is DeleteTodosRequestBody[number] => {
    if (typeof id !== 'number') {
      throw new ApiError(httpStatus.BAD_REQUEST, `Item number: ${index} must be a number`)
    }

    return true;
  }

  body.every(checkEachId);

  return body
}
