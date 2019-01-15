import { combineReducers } from 'redux'
import updateCodeReducer from './updateCodeReducer'

const rootReducer = combineReducers({
  code: updateCodeReducer
})

export default rootReducer