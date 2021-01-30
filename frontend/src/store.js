import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  productReducer,
  productDetailsReducer,
} from './reducers/productReducer'

const reducers = combineReducers({
  productList: productReducer,
  productDetails: productDetailsReducer,
})

const initialState = {}

const middlewares = [thunk]
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
)

export default store
