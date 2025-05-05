import axios from 'axios'
import { APIError } from '../classes/error.class'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

const TOKEN_ERROR_MESSAGES = new Set([
  'Unauthorized: User does not exist',
  'Unauthorized: No token provided',
  'Unauthorized: Token verification failed.',
  'Unauthorized: Invalid token.',
  'Unauthorized: Token expired.'
])

const isTokenError = (message: string) => TOKEN_ERROR_MESSAGES.has(message)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      return Promise.reject(new APIError('Network error. Please try again'))
    }

    const { status, data, config } = error.response
    const errorMessage = data?.message as string | undefined

    if (
      status === 401 &&
      errorMessage &&
      isTokenError(errorMessage) &&
      !config.headers['X-Skip-Interceptor']
    ) {
      setTimeout(() => {
        window.location.href = '/login'
      }, 0)

      return Promise.reject(
        new APIError('Token verification failed. Redirecting to login...', 401)
      )
    }

    const message = errorMessage || 'An error occurred. Please try again.'
    return Promise.reject(new APIError(message, status))
  }
)

export default api
