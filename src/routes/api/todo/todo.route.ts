import Router from "@koa/router";
import { DefaultState } from 'koa'
import { Paths } from '../../config.routes'
import { TodoRouterContext } from './todo.types'
import { handleGetTodos } from './controllers/getTodos.controller'
import { handlePostTodo } from './controllers/postTodo.controller'
import {handleDeleteTodos} from "./controllers/deleteTodos.controller";
import {handlePutTodo} from "./controllers/putTodo.controller";

const todoRouter = new Router<DefaultState, TodoRouterContext>({
  prefix: Paths.Todo,
})

todoRouter.get('/', handleGetTodos)
todoRouter.post('/', handlePostTodo)
todoRouter.delete('/', handleDeleteTodos)
todoRouter.put('/:id', handlePutTodo)

export default todoRouter
