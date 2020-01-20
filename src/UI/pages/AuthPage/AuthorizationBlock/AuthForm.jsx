import React, {useState} from 'react'
import {AuthErrorContainer, InputsWrapper} from "../styles";
import {AuthInput} from "../../../styles/Inputs";
import RestorePinCode from "./RestorePinCode";
import {AuthErrorMessage} from "../../../styles/auth-erros";
import {ButtonBasic} from "../../../styles/Buttons";

const AuthForm = ({onClickHandler, authError, openRestorePinBlock}) => {

    const [authData, setAuthData] = useState({
        serial: 'AVQ11019990085', pin: ''
    });

    const handleOnChange = e => {
        setAuthData({
            ...authData, [e.currentTarget.name]: e.currentTarget.value
        })
    };

    return (
        <>
            <InputsWrapper>
                <AuthInput  name='serial' value={authData.serial} onChange={handleOnChange}
                            onFocus={(e) => setAuthData({...authData, [e.currentTarget.name]: ''})}/>
                <AuthInput name='pin' value={authData.pin} onChange={handleOnChange} placeholder='PIN-код'  />
            </InputsWrapper>
            <RestorePinCode  openRestorePinBlock={openRestorePinBlock} errorMessage={authError}/>
            <AuthErrorContainer>
                {
                    authError && <AuthErrorMessage marginBottom='20px'>Введён неверный Pin-код</AuthErrorMessage>
                }
                <ButtonBasic onClick={() => onClickHandler(authData)}>Войти</ButtonBasic>
            </AuthErrorContainer>
        </>
    )
};

export default AuthForm