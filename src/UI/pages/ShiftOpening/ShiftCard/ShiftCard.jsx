import React from 'react'
import s from './ShiftCard.module.scss'
import {ShiftWrapper} from "../../../styles/Cards";
import {SmallTitle, Title} from "../../../styles/CardTitles";
import {ShiftInfoTitle} from "../styles";

import data from '../../../../img/data.svg'
import time from '../../../../img/time.svg'

const ShiftCard = ({isShiftOpen}) => {
    return (
        <ShiftWrapper>
            {!isShiftOpen ?
                <Title red>Текущая смена закрыта</Title> :
                <Title green>Текущая смена открыта</Title>
            }
            <div className={s.prev}>
                <SmallTitle>Предыдущая смена:</SmallTitle>
                <ShiftInfoTitle>№54931</ShiftInfoTitle>
            </div>
            <div className={s.time}>
                <SmallTitle>Смена открыта:</SmallTitle>
                <div className={s.info}>
                    <div className={s.infoItem}>
                        {!isShiftOpen ?
                            <ShiftInfoTitle>--.--.----</ShiftInfoTitle> :
                            <ShiftInfoTitle>29.04.2019</ShiftInfoTitle>
                        }
                        <div className={s.img}>
                            <img src={data} alt=""/>
                        </div>
                    </div>
                    <div className={s.infoItem}>
                        {!isShiftOpen ?
                            <ShiftInfoTitle>--.--.----</ShiftInfoTitle> :
                            <ShiftInfoTitle>09:01:33</ShiftInfoTitle>
                        }
                        <div className={s.img}>
                            <img src={time} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </ShiftWrapper>
    )
};


export default ShiftCard