import React from 'react'
import { useMappedState } from 'redux-react-hook'

import { RootState } from '../../../store/state'

export default function AuthIndicator() {
  const token = useMappedState<RootState>(state => state.auth.token)
  return (
    <div>{token}</div>
  )
}
