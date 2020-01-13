import React from 'react'
import s from './RegistrationInfo.module.scss'
import {BoldSimpleTitle, SimpleTitle, Title} from "../../../styles/CardTitles";

const RegistrationInfo = () => {
    return (
        <div className={s.wrapperRegistration}>
            <Title>Регистрационная информация</Title>
            <div className={s.infoBlock}>
                <div className={s.itemOrganization}>
                    <SimpleTitle>Организация</SimpleTitle>
                    <BoldSimpleTitle>Общество с ограниченной ответсвенностью “РестФронт”</BoldSimpleTitle>
                </div>
                <div className={s.item}>
                    <SimpleTitle>УНП</SimpleTitle>
                    <BoldSimpleTitle>187469571</BoldSimpleTitle>
                </div>
                <div className={s.item}>
                    <SimpleTitle>Рег. номер</SimpleTitle>
                    <BoldSimpleTitle>111111111</BoldSimpleTitle>
                </div>
            </div>
        </div>
    )
};


export default RegistrationInfo