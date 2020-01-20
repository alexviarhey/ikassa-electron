import React, {useState} from 'react'
import {Title, TitleWrapper} from "../../styles/CardTitles";
import {RestorePinCodeCard} from "../../styles/Cards";
import {PinInputWrapper, PukInputWrapper, RestorePinCodeOuter} from "./restore-pinCode-styles";
import {AuthInput, NewPinCodeInput} from "../../styles/Inputs";
import {AuthErrorMessage} from "../../styles/auth-erros";
import {ButtonBasic} from "../../styles/Buttons";
import {AuthErrorContainer} from "../AuthPage/styles";



const RestorePinCodeBlock = ({confirmChangePin}) => {


    const [pinData, setPinData] = useState({
        puk: '', pin: '', repeatPin: ''
    });

    const [errorMessage, setErrorMessage] = useState(null);

    const setNewPin = e => {
        setPinData({
            ...pinData, [e.currentTarget.name]: e.currentTarget.value
        });

    };

    const confirmNewPassword = () => {
        if(pinData.pin !== pinData.repeatPin) {
            setPinData({
                ...pinData, pin: '', repeatPin: ''
            });
            setErrorMessage('Pin-коды не совпадают');
        } else {
            confirmChangePin(pinData)
        }
    };

    return (
        <>
            <RestorePinCodeOuter>
                <RestorePinCodeCard>
                    <TitleWrapper>
                        <Title>Восстановление pin-кода</Title>
                    </TitleWrapper>
                    <PukInputWrapper>
                        <AuthInput  onChange={setNewPin} value={pinData.puk} name='puk' placeholder='Puk-код'/>
                    </PukInputWrapper>
                    <PinInputWrapper errorMessage={errorMessage}>
                        <NewPinCodeInput error={errorMessage} onFocus={() => setErrorMessage(null)} value={pinData.pin}
                                         type='password' onChange={setNewPin} name='pin' placeholder='Новый pin-код'/>
                        <NewPinCodeInput error={errorMessage} onFocus={() => setErrorMessage(null)} value={pinData.repeatPin}
                                         type='password' onChange={setNewPin} name='repeatPin' placeholder='Повторить pin-код'/>
                    </PinInputWrapper>
                    <AuthErrorContainer>
                        {
                            errorMessage &&
                            <AuthErrorMessage marginBottom='15px'>{errorMessage}</AuthErrorMessage>
                        }
                        <ButtonBasic onClick={confirmNewPassword}>Подтвердить</ButtonBasic>
                    </AuthErrorContainer>
                </RestorePinCodeCard>
            </RestorePinCodeOuter>
        </>
    )
};


export default RestorePinCodeBlock