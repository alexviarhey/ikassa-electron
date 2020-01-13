import React from 'react'
import {BoldSimpleTitle, SimpleTitle, Title} from "../../../styles/CardTitles";
import s from "../RegistrationInfo/RegistrationInfo.module.scss";
import {IsValidTitle} from "../styles";


const Certificate = () => {
    return (
        <div className={s.wrapperCertificate}>
            <Title>Сертификат</Title>
            <div className={s.infoBlock}>
                <div className={s.item}>
                    <SimpleTitle>Действителен</SimpleTitle>
                    <BoldSimpleTitle>
                        <div>
                            с 1971-07-23
                        </div>
                        <div>
                            по 2019-07-23
                        </div>
                    </BoldSimpleTitle>
                </div>
                <div className={s.item}>
                    <SimpleTitle>Валидность</SimpleTitle>
                    <IsValidTitle>Действителен</IsValidTitle>
                </div>
            </div>
        </div>
    )
};

export default Certificate