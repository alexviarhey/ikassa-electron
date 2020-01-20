import {applyMiddleware, combineReducers, createStore} from "redux";
import {productReducer} from "./reducers/product-reducer";
import thunkMiddleWare from 'redux-thunk'
import {authReducer} from "./reducers/auth-reducer";

const reducers = combineReducers({
    products: productReducer,
    authorization: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));



export default store