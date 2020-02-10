import { StandardAction } from '../types'
import { TokenType } from './state'

// auth/SET_TOKEN

interface SetTokenPayload {
  token: TokenType
}

type SetTokenAction = StandardAction<'auth/SET_TOKEN', SetTokenPayload>

function setToken(token: TokenType): SetTokenAction {
  return { type: 'auth/SET_TOKEN', payload: { token } }
}

// auth/DROP_TOKEN

type DropTokenAction = StandardAction<'auth/DROP_TOKEN', void>

function dropToken(): DropTokenAction {
  return { type: 'auth/DROP_TOKEN', payload: undefined }
}

// Integrate Actions
// -----------------

export type AuthAction = SetTokenAction | DropTokenAction

export default {
  setToken,
  dropToken,
}
