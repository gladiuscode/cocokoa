import { CustomContext } from '../../../../core/types/generic.types'
import { Todo } from '@prisma/client'
import {TodoRouterContext} from "../todo.types";

export type GetTodosResponseBody = Todo[]

export type GetTodosContext = CustomContext<TodoRouterContext, GetTodosResponseBody>
