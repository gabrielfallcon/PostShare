import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'


const store = applyMiddleware(thunk)(createStore)

export default store