import React from 'react'
import {AuthWrapper} from "../../styles/Cards";
import s from './RegistrationInfo/RegistrationInfo.module.scss'
import RegistrationInfoContainer from "./RegistrationInfo/RegistrationInfoContainer";
import Certificate from "./Certificate/Certificate";
import AuthorizationBlockContainer from "./AuthorizationBlock/AuthorizatonBlockContainer";


const AuthPage = () => {
    return (
        <AuthWrapper>
            <div className={s.outer}>
                <RegistrationInfoContainer />
                <Certificate />
            </div>
            <AuthorizationBlockContainer />
        </AuthWrapper>
    )
};


export default AuthPage