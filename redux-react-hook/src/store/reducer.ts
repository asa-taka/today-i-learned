import { combineReducers } from 'redux'

import cacheReducer from '../features/cache/reducer'
import authReducer from '../features/auth/reducer'

export default combineReducers({
  auth: authReducer,
  cache: cacheReducer,
})
