import React from 'react'
import {Title, TitleWrapper} from "../../../styles/CardTitles";
import {AuthErrorContainer, InputsWrapper} from "../styles";
import {AuthInput} from "../../../styles/Inputs";
import RestorePinCode from "./RestorePinCode";
import {ButtonBasic} from "../../../styles/Buttons";
import {AuthErrorMessage} from "../../../styles/auth-erros";
import AuthForm from "./AuthForm";


const AuthorizationBlock = ({onClickHandler, authError, openRestorePinBlock}) => {
    console.log('render');
    return (

        <>
            <TitleWrapper>
                <Title>Авторизация</Title>
            </TitleWrapper>
            <AuthForm  openRestorePinBlock={openRestorePinBlock} onClickHandler={onClickHandler}  authError={authError}/>
        </>
   )
};


export default AuthorizationBlock