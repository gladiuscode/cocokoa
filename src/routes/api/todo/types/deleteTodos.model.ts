import { CustomContext } from '../../../../core/types/generic.types'
import {Todo} from "@prisma/client";
import {TodoRouterContext} from "../todo.types";

export type DeleteTodosResponseBody = undefined

export type DeleteTodosContext = CustomContext<TodoRouterContext, DeleteTodosResponseBody>

export type DeleteTodosRequestBody = Todo['id'][];
