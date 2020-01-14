import React from 'react'
import {ProductCard} from "../../../styles/Cards";
import {HeaderTitle, ProductsCardHeader} from "../sale-page-styles";

const AddProductCard = () => {
    return (
        <ProductCard>
            <ProductsCardHeader>
                <HeaderTitle>Наименование</HeaderTitle>
                <HeaderTitle>Кол-во</HeaderTitle>
                <HeaderTitle>Скидка</HeaderTitle>
                <HeaderTitle>Сумма</HeaderTitle>
            </ProductsCardHeader>
        </ProductCard>
    )
};



export default AddProductCard