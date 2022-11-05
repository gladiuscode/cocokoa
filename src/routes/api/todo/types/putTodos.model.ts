import { CustomContext } from '../../../../core/types/generic.types'
import {Todo} from "@prisma/client";
import {TodoRouterContext} from "../todo.types";

export type PutTodoResponseBody = undefined

export type PutTodoContext = CustomContext<TodoRouterContext, PutTodoResponseBody>

export type PutTodoRequestBody = Omit<Todo, 'id' | 'createdAt' | 'userId'>;
