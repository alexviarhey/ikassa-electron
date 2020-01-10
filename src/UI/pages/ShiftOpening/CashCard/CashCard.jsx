import React from 'react'
import s from "./CashCard.module.scss";
import {SimpleTitle} from "../../../styles/CardTitles";
import {Sum} from "../styles";
import {Input} from "../../../styles/Inputs";
import {CashButton} from "../../../styles/Buttons";
import {CashWrapper} from "../../../styles/Cards";

const CashCard = ({isShiftOpen}) => {
    return (
        <CashWrapper>
            <div className={s.outer}>
                <div className={s.titleWrapper}>
                    <SimpleTitle>Наличные в кассе:</SimpleTitle>
                    <Sum>0 BYN</Sum>
                </div>
                <Input placeholder='0,00 BYN' />
                <div className={s.buttons}>
                    <CashButton isDisabled={!isShiftOpen} disabled={!isShiftOpen}>Внести</CashButton>
                    <CashButton isDisabled={!isShiftOpen} disabled={!isShiftOpen}>Изъять</CashButton>
                </div>
            </div>
        </CashWrapper>
    )
};

export default CashCard