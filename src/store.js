import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getReposFromGithubReducer } from './reducers/DisplayReposReducers.js'

const reducer = combineReducers({
    getReposFromGithub: getReposFromGithubReducer
})

const initialState = {}
const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store