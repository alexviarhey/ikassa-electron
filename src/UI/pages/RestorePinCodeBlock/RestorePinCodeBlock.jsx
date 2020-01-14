import React from 'react'
import {Title, TitleWrapper} from "../../styles/CardTitles";
import {RestorePinCodeCard} from "../../styles/Cards";
import {PinInputWrapper, PukInputWrapper, RestorePinCodeOuter} from "./restore-pinCode-styles";
import {AuthInput, NewPinCodeInput} from "../../styles/Inputs";
import {AuthErrorMessage} from "../../styles/auth-erros";
import {ButtonBasic} from "../../styles/Buttons";
import {AuthErrorContainer} from "../AuthPage/styles";


const RestorePinCodeBlock = ({errorMessage, setErrorMessage}) => {

    return (
        <>
            <RestorePinCodeOuter>
                <RestorePinCodeCard>
                    <TitleWrapper>
                        <Title>Восстановление pin-кода</Title>
                    </TitleWrapper>
                    <PukInputWrapper>
                        <AuthInput error={errorMessage} placeholder='Puk-код'/>
                    </PukInputWrapper>
                    <PinInputWrapper errorMessage={errorMessage}>
                        <NewPinCodeInput error={errorMessage} placeholder='Новый pin-код'/>
                        <NewPinCodeInput error={errorMessage} placeholder='Повторить pin-код'/>
                    </PinInputWrapper>
                    <AuthErrorContainer>
                        {
                            errorMessage &&
                            <AuthErrorMessage marginBottom='15px'>Неверный Puk-код</AuthErrorMessage>
                        }
                        <ButtonBasic onClick={setErrorMessage}>Подтвердить</ButtonBasic>
                    </AuthErrorContainer>
                </RestorePinCodeCard>
            </RestorePinCodeOuter>
        </>
    )
};


export default RestorePinCodeBlock