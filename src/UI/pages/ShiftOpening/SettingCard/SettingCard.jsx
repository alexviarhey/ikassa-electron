import React from 'react'
import s from './SettingCard.module.scss'
import {WrapperForShiftBlock} from "../../../styles/Cards";
import {Title} from "../../../styles/CardTitles";
import {SettingsButton} from "../../../styles/Buttons";

const SettingCard = () => {
    return (
        <>
            <WrapperForShiftBlock>
                <Title>Настройки</Title>
                <div className={s.buttons}>
                    <SettingsButton>Отправка документов</SettingsButton>
                    <SettingsButton>Синхронизация времени</SettingsButton>
                </div>
            </WrapperForShiftBlock>
        </>
    )
};


export default SettingCard