import {authApi} from "../../DAL/auth-api";

const SET_IS_AUTH = 'authReducer/SET_IS_AUTH';
const SET_AUTH_ERROR = 'authReducer/SET_AUTH_ERROR';
const SET_TOGGLE_PIN_CHANGE = 'authReducer/SET_TOGGLE_PIN_CHANGE';
const SET_IS_PIN_CHANGE = 'authReducer/SET_IS_PIN_CHANGE';



const initialState = {
    isAuth: false,
    authError: null,
    togglePinChange: false,
    isPinChange: false,
    pinChangeError: null
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.isAuth
            };
        case SET_AUTH_ERROR:
            return {
                ...state,
                authError: action.authError
            };
        case SET_TOGGLE_PIN_CHANGE:
            return {
                ...state,
                togglePinChange: action.togglePinChange
            };
        case SET_IS_PIN_CHANGE:
            return {
                ...state,
                isPinChange: action.isPinChange
            };
            default:
            return state
    }
};


const setIsAuth = (isAuth) => {
    return {type: SET_IS_AUTH, isAuth}
};

const setAuthError = (authError) => {
    return {type: SET_AUTH_ERROR, authError}
};

export const setTogglePinChange = (togglePinChange) => {
    return {type: SET_TOGGLE_PIN_CHANGE, togglePinChange}
};

const setIsPinChange = (isPinChange) => {
    return {type: SET_IS_PIN_CHANGE, isPinChange}
};

export const authMe = (authData) => async (dispatch) => {
    debugger
    let res = await authApi.authorize(authData);
    res ? dispatch(setIsAuth(true)) : dispatch(setAuthError(res.error))
};

export const restorePin = (changePinData) => async (dispatch) => {
    /*let res = await authApi.changePin(changePinData);
    if(res) {
        dispatch(setIsPinChange(true))
    } */
        dispatch(setTogglePinChange(false));
};
