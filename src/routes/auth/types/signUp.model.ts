import { CustomContext } from '../../../core/types/generic.types'
import {DefaultContext} from "koa";

export type SignUpResponseBody = undefined

export type SignUpContext = CustomContext<DefaultContext, SignUpResponseBody>

export type SignUpRequestBody = {
  readonly email: string
  readonly password: string
}
