import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { categoriesReducer } from './reducers/CategoryReducer';
import { productDetailsReducer, productsReducer } from './reducers/ProductReducer';
import { cartReducer } from './reducers/CardReducer';

const reducer = combineReducers({
    cat : categoriesReducer,
    pro : productsReducer,
    pDetail : productDetailsReducer, 
    cart : cartReducer,


})

let initializeState={}

const Store = createStore(reducer, initializeState, composeWithDevTools(applyMiddleware(thunk)))

export default Store