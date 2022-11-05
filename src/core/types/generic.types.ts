import {DefaultContext, DefaultState, ParameterizedContext} from 'koa'

export type GenericResponseBody<Data> = {
  readonly success: boolean
  readonly message: string
  readonly data: Data
}

export type CustomContext<RouterContext, Data> = ParameterizedContext<
  DefaultState,
  DefaultContext & RouterContext,
  GenericResponseBody<Data>
>
