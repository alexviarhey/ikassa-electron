import {applyMiddleware, combineReducers, createStore} from "redux";
import {productReducer} from "./reducers/product-reducer";
import thunkMiddleWare from 'redux-thunk'

const reducers = combineReducers({
    products: productReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store