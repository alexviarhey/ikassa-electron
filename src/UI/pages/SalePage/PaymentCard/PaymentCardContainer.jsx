import React from 'react'
import PaymentCard from "./PaymentCard";


const PaymentCardContainer = ({products}) => {

    const amount = products.map(p => +p.amount.replace(',', '.')).reduce((a, i) => a + i, 0);
    console.log(amount);
    return (
        <PaymentCard amount={amount} />
    )
};


export default PaymentCardContainer