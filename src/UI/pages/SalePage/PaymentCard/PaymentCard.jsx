import React from 'react'
import {PaymentBlockWrapper} from "../../../styles/Cards";
import {Title} from "../../../styles/CardTitles";
import PaymentMethods from "./PaymentMethods";


const PaymentCard = () => {
    return (
        <PaymentBlockWrapper>
            <Title>Оплата</Title>
            <PaymentMethods />
        </PaymentBlockWrapper>
    )
};


export default PaymentCard