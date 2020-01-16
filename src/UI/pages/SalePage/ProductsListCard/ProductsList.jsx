import React from 'react'
import {Title} from "../../../styles/CardTitles";
import {ProductsListCard} from "../../../styles/Cards";
import {SearchInput} from "../../../styles/Inputs";
import {ProductListItem, ProductListWrapper, SearchBlockWrapper} from "./product-list-styles";

import check from '../../../../img/check_button.svg'
import {SearchButton} from "../../../styles/Buttons";
import {ProductItemAmount, ProductItemName} from "../sale-page-styles";


const ProductsList = ({width, height}) => {
    return (
        <ProductsListCard width={width} height={height}>
            <Title>Список товаров</Title>
            <SearchBlockWrapper>
                <SearchInput placeholder='Поиск по наименованию'/>
                <SearchButton><img src={check} alt=""/></SearchButton>
            </SearchBlockWrapper>
            <ProductListWrapper>
                <ProductListItem>
                    <ProductItemName fromList>Хлеб</ProductItemName>
                    <ProductItemAmount fromList>547,59 BYN</ProductItemAmount>
                </ProductListItem>
                <ProductListItem isFound>
                    <ProductItemName isFound fromList> Батон</ProductItemName>
                    <ProductItemAmount isFound fromList>105,03 BYN</ProductItemAmount>
                </ProductListItem>
                <ProductListItem>
                    <ProductItemName fromList>Вино</ProductItemName>
                    <ProductItemAmount fromList>0 BYN</ProductItemAmount>
                </ProductListItem>
            </ProductListWrapper>
        </ProductsListCard>
    )
};

export default ProductsList