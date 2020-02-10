import React from 'react'
import { useDispatch } from 'redux-react-hook'

import actions from '../actions'

export default function LoginButton() {
  const dispatch = useDispatch()
  const logout = () => dispatch(actions.dropToken())
  return (
    <button onClick={logout}>logout</button>
  )
}
