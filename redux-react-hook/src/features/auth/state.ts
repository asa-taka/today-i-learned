export type TokenType = string

export interface AuthState {
  token?: TokenType
}

export const initialState: AuthState = {}
