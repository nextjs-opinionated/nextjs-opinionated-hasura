export interface ValidationErrorType {
  code: string
  minimum?: number
  type?: string
  inclusive?: boolean
  message: string
  path: string[]
}
