import { DefaultContext } from 'koa'
import {User} from "@prisma/client";

export type ApiRouterContext = DefaultContext & { token: { email: string }, user: User }
