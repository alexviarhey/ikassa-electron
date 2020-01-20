import React, {useState} from 'react'
import {Title} from "../../../styles/CardTitles";
import {ProductsListCard} from "../../../styles/Cards";
import {ProductListItem, ProductListWrapper} from "./product-list-styles";
import {ProductItemAmount, ProductItemName} from "../sale-page-styles";
import SearchInputBlock from "../../../components/SearchInputBlock";


const ProductsList = ({width, height, products}) => {

    const [value, setValue] = useState('');

    const productList = products.filter(p => p.name.toUpperCase().indexOf(value.toUpperCase()) >= 0).map((p, i) => (
        <ProductListItem isFound={value} key={i}>
            <ProductItemName isFound={value} fromList>{p.name}</ProductItemName>
            <ProductItemAmount isFound={value} fromList>{p.amount}</ProductItemAmount>
        </ProductListItem>
    ));

    return (
        <ProductsListCard width={width} height={height}>
            <Title>Список товаров</Title>
            <SearchInputBlock value={value} onChangeHandler={setValue}  placeholder='Поиск по наименованию' />
            <ProductListWrapper>
                {productList}
            </ProductListWrapper>
        </ProductsListCard>
    )
};

export default ProductsList