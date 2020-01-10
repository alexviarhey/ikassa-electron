import React from 'react'
import {AuthWrapper} from "../../styles/Cards";
import s from './RegistratioInfo/RegistrationInfo.module.scss'
import RegistrationInfoContainer from "./RegistratioInfo/RegistrationInfoContainer";
import Certificate from "./Certificate/Certificate";


const AuthPage = () => {
    return (
        <AuthWrapper>
            <div className={s.outer}>
                <RegistrationInfoContainer />
                <Certificate />
            </div>
        </AuthWrapper>
    )
};


export default AuthPage