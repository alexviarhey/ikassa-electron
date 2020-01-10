import React from 'react'
import s from './DocumentCard.module.scss'
import {WrapperForShiftBlock} from "../../../styles/Cards";
import {SmallTitle, Title} from "../../../styles/CardTitles";


const DocumentCard = () => {
    return (
        <WrapperForShiftBlock>
            <Title>Отправка документов</Title>
            <div className={s.text}>
                <SmallTitle>Кассовые документы не отправленные Оператору ПКС</SmallTitle>
            </div>
            <div className={s.documentsCount}>
                2495
            </div>
        </WrapperForShiftBlock>
    )
};


export default DocumentCard