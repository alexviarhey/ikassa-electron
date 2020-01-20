import React from 'react'
import {TotalMountItem, TotalMountOuter, TotalMountSubtitle, TotalMountTitle} from "./payment-card";

const TotalAmount = ({amount}) => {
    return (
        <TotalMountOuter>
            <TotalMountItem topBlock>
                <TotalMountSubtitle>Общая сумма</TotalMountSubtitle>
                <TotalMountTitle>{amount} BYN</TotalMountTitle>
            </TotalMountItem>
            <TotalMountItem>
                <TotalMountSubtitle>Сдача</TotalMountSubtitle>
                <TotalMountTitle>0 BYN</TotalMountTitle>
            </TotalMountItem>
        </TotalMountOuter>
    )
};

export default TotalAmount