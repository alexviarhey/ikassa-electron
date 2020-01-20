import React from 'react'
import {Title, TitleWrapper} from "../../../styles/CardTitles";
import AuthForm from "./AuthForm";


const AuthorizationBlock = ({onClickHandler, authError, openRestorePinBlock}) => {

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