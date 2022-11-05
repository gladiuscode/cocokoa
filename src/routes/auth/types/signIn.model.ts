import { CustomContext } from '../../../core/types/generic.types'
import {DefaultContext} from "koa";

export type SignInResponseBody = {
  token: string
}

export type SignInContext = CustomContext<DefaultContext, SignInResponseBody>

export type SignInRequestBody = {
  readonly email: string
  readonly password: string
}
