import {ApiError} from "../../../../shared/models/error/error.model";
import httpStatus from "http-status";
import {PutTodoRequestBody} from "../types/putTodos.model";

export const checkPutTodo = (body: any): PutTodoRequestBody => {
  if (typeof body !== 'object') {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Payload must be a Todo-like object')
  }

  const todoKeys = ['title', 'content'];
  const payloadKeys = Object.keys(body);

  const hasInvalidProperties = payloadKeys.filter(key => !todoKeys.includes(key));
  if (!hasInvalidProperties.length) {
    return body;
  }

  const messagePrefix = 'Payload contains the following invalid properties:';
  const message = hasInvalidProperties.reduce(
    (accMessage, currentProperty, index, array) => {
      const updatedMessageWithoutPunctuation = `${accMessage} ${currentProperty}`;
      const isLast = index === array.length -1;
      return isLast ? updatedMessageWithoutPunctuation : `${updatedMessageWithoutPunctuation},`;
    },
    messagePrefix
  );
  throw new ApiError(httpStatus.BAD_REQUEST, message);
}
