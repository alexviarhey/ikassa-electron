import React from 'react'
import {Title, TitleWrapper} from "../../../styles/CardTitles";
import {AuthErrorContainer, InputsWrapper} from "../styles";
import {AuthInput} from "../../../styles/Inputs";
import RestorePinCode from "./RestorePinCode";
import {ButtonBasic} from "../../../styles/Buttons";
import {AuthErrorMessage} from "../../../styles/auth-erros";


const AuthorizationBlock = ({errorMessage, setErrorMessage}) => {
    console.log('render');
    return (

        <>
            <TitleWrapper>
                <Title>Авторизация</Title>
            </TitleWrapper>
            <InputsWrapper>
                <AuthInput value='AVQ11019990085'/>
                <AuthInput placeholder='PIN-код' error />
            </InputsWrapper>
            <RestorePinCode errorMessage={errorMessage}/>
            <AuthErrorContainer>
                {
                    errorMessage && <AuthErrorMessage marginBottom='20px'>Введён неверный Pin-код</AuthErrorMessage>
                }
                <ButtonBasic onClick={() => {
                    if(errorMessage) {
                        setErrorMessage(false)
                    } else {setErrorMessage(true) }
                }}>Войти</ButtonBasic>
            </AuthErrorContainer>
        </>
   )
};


export default AuthorizationBlock