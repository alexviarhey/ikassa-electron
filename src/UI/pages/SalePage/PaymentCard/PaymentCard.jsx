import React from 'react'
import {PaymentBlockWrapper} from "../../../styles/Cards";
import {Title} from "../../../styles/CardTitles";
import PaymentMethods from "./PaymentMethods";


const PaymentCard = ({amount}) => {
    return (
        <PaymentBlockWrapper>
            <Title>Оплата</Title>
            <PaymentMethods amount={amount} />
        </PaymentBlockWrapper>
    )
};


export default PaymentCard