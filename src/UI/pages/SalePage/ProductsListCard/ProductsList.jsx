import React from 'react'
import {Title} from "../../../styles/CardTitles";
import {ProductsListCard} from "../../../styles/Cards";
import {ProductListItem, ProductListWrapper} from "./product-list-styles";
import {ProductItemAmount, ProductItemName} from "../sale-page-styles";
import SearchInputBlock from "../../../components/SearchInputBlock";


const ProductsList = ({width, height}) => {
    return (
        <ProductsListCard width={width} height={height}>
            <Title>Список товаров</Title>
            <SearchInputBlock placeholder='Поиск по наименованию' />
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