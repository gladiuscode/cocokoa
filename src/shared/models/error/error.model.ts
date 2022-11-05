import httpStatus from 'http-status'

export class ApiError extends Error {
  private static readonly defaultStatus = httpStatus.INTERNAL_SERVER_ERROR
  private static readonly defaultMessage = 'Something went wrong.'

  constructor(
    readonly status: number = ApiError.defaultStatus,
    readonly message: string = ApiError.defaultMessage
  ) {
    super(message)
  }
}
