import React from 'react'
import {AuthWrapper} from "../../styles/Cards";
import s from './RegistrationInfo/RegistrationInfo.module.scss'
import RegistrationInfoContainer from "./RegistrationInfo/RegistrationInfoContainer";
import Certificate from "./Certificate/Certificate";
import AuthorizationBlockContainer from "./AuthorizationBlock/AuthorizatonBlockContainer";
import RestorePinCodeBlockContainer from "../RestorePinCodeBlock/RestorePinCodeBlockContainer";
import {useDispatch, useSelector} from "react-redux";
import {setTogglePinChange} from "../../../BLL/reducers/auth-reducer";


const AuthPage = () => {

    const dispatch = useDispatch();
    const togglePinChange = useSelector(state => state.authorization.togglePinChange);
    const openRestorePinBlock = () => {
        dispatch(setTogglePinChange(true))
    };

    return (
        <>
            <AuthWrapper>
                <div className={s.outer}>
                    <RegistrationInfoContainer/>
                    <Certificate/>
                </div>
                <AuthorizationBlockContainer  openRestorePinBlock={openRestorePinBlock}/>
            </AuthWrapper>
            {
                togglePinChange && <RestorePinCodeBlockContainer />
            }
            </>
    )
};


export default AuthPage