import React from 'react'
import {Title} from "../../styles/CardTitles";
import {EnterCheckNumberCard} from "../../styles/Cards";
import {ReturnProductInput} from "../../styles/Inputs";
import {ButtonWrapper, Error, InputWrapper} from "./entercheck-number-styles";
import {ReturnButton} from "../../styles/Buttons";


const EnterCheckNumber = () => {
    return (
        <EnterCheckNumberCard>
            <Title>Введите номер чека</Title>
            <InputWrapper>
                <ReturnProductInput placeholder='№ *********' />
            </InputWrapper>
            <Error>Данный чек не найден</Error>
            <ButtonWrapper>
                <ReturnButton>Аннулировать</ReturnButton>
            </ButtonWrapper>
        </EnterCheckNumberCard>
    )
};


export default EnterCheckNumber