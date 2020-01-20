import React from 'react'
import AuthorizationBlock from "./AuthorizationBlock";
import {useDispatch, useSelector} from "react-redux";
import {authMe} from "../../../../BLL/reducers/auth-reducer";


const AuthorizationBlockContainer = ({openRestorePinBlock}) => {

    const dispatch = useDispatch();
    const authError = useSelector(state => state.authorization.isAuth);

    const onClickHandler = (authData) => {
        dispatch(authMe(authData))
    };

    return (
        <div>
            <AuthorizationBlock openRestorePinBlock={openRestorePinBlock} onClickHandler={onClickHandler} authError={authError} />
        </div>
    )
};


export default AuthorizationBlockContainer