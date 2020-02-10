import React from 'react'
import { useDispatch } from 'redux-react-hook'

import actions from '../actions'

export default function LoginButton() {
  const dispatch = useDispatch()
  const login = () => dispatch(actions.setToken('TEST_TOKEN'))
  return (
    <button onClick={login}>login</button>
  )
}
