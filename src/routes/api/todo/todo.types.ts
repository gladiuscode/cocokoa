import { DefaultContext } from 'koa'
import {User} from "@prisma/client";

export type TodoRouterContext = DefaultContext & { token: { email: string }, user: User }
