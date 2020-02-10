import { AuthState, initialState } from './state'
import { OtherAction } from '../types'
import { AuthAction } from './actions'

type Action = AuthAction | OtherAction

export default function reducer(state: AuthState = initialState, action: Action): AuthState {

  if (action.type === 'auth/SET_TOKEN') {
    const { token } = action.payload
    return { token }
  }

  if (action.type === 'auth/DROP_TOKEN') {
    return {}
  }

  return state
}
