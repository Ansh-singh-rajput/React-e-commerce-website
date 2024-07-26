import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { categoriesReducer } from './reducers/CategoryReducer';
import { productDetailsReducer, productsReducer } from './reducers/ProductReducer';
import { cartReducer } from './reducers/CardReducer';
import { slidersReducer } from './reducers/SliderReducer';
import { userRegisterReducer } from './reducers/UserReducer';
import { myOrdersReducer, newOrderReducer, orderDetailsReducer } from './reducers/OrderReducer';

const reducer = combineReducers({
    cat : categoriesReducer,
    pro : productsReducer,
    pDetail : productDetailsReducer, 
    cart : cartReducer,
    sal: slidersReducer,
    auth: userRegisterReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    orderDetail:orderDetailsReducer,


})

let initializeState={
    cart: {
        cartItems: localStorage.getItem('carItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        :[],
        shippingInfo: localStorage.getItem("shippingInfo")
        ? JSON.parse(localStorage.getItem("shippingInfo"))
        : {},
    }
}

const Store = createStore(reducer, initializeState, composeWithDevTools(applyMiddleware(thunk)))

export default Store