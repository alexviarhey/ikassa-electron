import React from 'react'
import {ReturnProductWrapper} from "../../styles/Cards";
import {Title} from "../../styles/CardTitles";
import {Container, ContainerRow, ReturnSumContainer, SmallText, Text} from "./return-product";
import {PaymentMethodInput, ReturnProductInput} from "../../styles/Inputs";
import {TotalMountItem, TotalMountSubtitle, TotalMountTitle} from "../SalePage/PaymentCard/payment-card";


const ReturnProductCard = () => {
    return (
        <ReturnProductWrapper>
                <Title>Возврат товара</Title>
                <Container>
                    <Text>Наименование товара</Text>
                    <ReturnProductInput placeholder='_________'/>
                </Container>
                <Container>
                    <Text>Количество товара</Text>
                    <ReturnProductInput placeholder='_________'/>
                </Container>
                <Title gray>Сумма товара</Title>
                <ContainerRow>
                    <Container>
                        <SmallText>Наличные</SmallText>
                        <PaymentMethodInput placeholder='0 BYN'/>
                    </Container>
                    <Container>
                        <SmallText>Наличные</SmallText>
                        <PaymentMethodInput placeholder='0 BYN'/>
                    </Container>
                </ContainerRow>
                <ReturnSumContainer>
                    <TotalMountItem>
                        <TotalMountSubtitle>Сумма к возврату</TotalMountSubtitle>
                        <TotalMountTitle>3000 BYN</TotalMountTitle>
                    </TotalMountItem>
                </ReturnSumContainer>
            </ReturnProductWrapper>
            )
};


export default ReturnProductCard