export class APIError extends Error {
  public readonly status?: number

  constructor(message: string, status: number = 500) {
    super(message)
    this.status = status

    Object.setPrototypeOf(this, APIError.prototype)
  }
}
