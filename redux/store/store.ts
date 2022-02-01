import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { redux_initialState } from '../mock'


type IActions = {
  type: 'UPDATE'
  payload: any
}

// REDUCERS
export const reducer = (state = redux_initialState, action : IActions) => {

  const actionsLocal = {
    UPDATE: {
      ...state,
      ...action.payload
    }
  }

  if (!actionsLocal[action.type]) {
    return state
  } else {
    return actionsLocal[action.type]
  }

}

const logger = createLogger({});

export function initializeStore(initialState = redux_initialState) {
  const middlewares = [
    thunkMiddleware, 
    logger
  ]
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)))
}
