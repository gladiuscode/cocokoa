import { CustomContext } from '../../../../core/types/generic.types'
import {Todo} from "@prisma/client";
import {TodoRouterContext} from "../todo.types";

export type PostTodoResponseBody = undefined

export type PostTodoContext = CustomContext<TodoRouterContext, PostTodoResponseBody>

export type PostTodoRequestBody = Omit<Todo, 'id' | 'createdAt' | 'userId'>
