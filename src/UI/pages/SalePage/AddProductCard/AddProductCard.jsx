import React from 'react'
import {ProductCard} from "../../../styles/Cards";
import {
    AddButtonContainer,
    HeaderItem,
    HeaderItemCenter,
    ProductsCardHeader, ProductsContainer, TotalSale, TotalSaleContainer, TotalSaleTitle
} from "../sale-page-styles";
import AddProductCardItem from "./AddProductCardItem";
import {AddProductButton} from "../../../styles/Buttons";
import {AddInput, AddProductForm, CenterInputsWrapper, FormContainer} from "./add-form-style";

const AddProductCard = () => {
    return (
        <ProductCard>
            <ProductsCardHeader>
                <HeaderItem>Наименование</HeaderItem>
                <HeaderItem>
                    <HeaderItemCenter>Кол-во</HeaderItemCenter>
                    <HeaderItemCenter>Скидка</HeaderItemCenter>
                </HeaderItem>
                <HeaderItem>Сумма</HeaderItem>
            </ProductsCardHeader>
            <ProductsContainer>
                <AddProductCardItem/>
                <AddProductCardItem/>
                <AddProductCardItem/>
                <AddProductCardItem/>
            </ProductsContainer>
            <FormContainer>
                <AddProductForm>
                    <AddInput placeholder='Название'/>
                    <CenterInputsWrapper>
                        <AddInput placeholder='0'/>
                        <AddInput placeholder='0%'/>
                    </CenterInputsWrapper>
                    <AddInput noBorder placeholder='0 BYN'/>
                </AddProductForm>
            </FormContainer>
            <AddButtonContainer>
                <AddProductButton>Добавить товар</AddProductButton>
            </AddButtonContainer>
            <TotalSaleContainer>
                <TotalSaleTitle>Общая скидка</TotalSaleTitle>
                <TotalSale>0%</TotalSale>
            </TotalSaleContainer>
        </ProductCard>
    )
};


export default AddProductCard