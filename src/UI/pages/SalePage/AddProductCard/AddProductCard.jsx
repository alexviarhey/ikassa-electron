import React from 'react'
import {ProductCard} from "../../../styles/Cards";
import {
    HeaderItem,
    HeaderItemCenter,
    ProductsCardHeader, ProductsContainer, TotalSale, TotalSaleContainer, TotalSaleTitle
} from "../sale-page-styles";
import AddProductCardItem from "./AddProductCardItem";
import AddProductForm from "./AddProductForm";


const AddProductCard = ({addItem, products, deleteItem}) => {

    const productList = products.map((p, i) => (
        <AddProductCardItem deleteItem={deleteItem} key={i} product={p}/>
    ));

    const totalSale = products.map(p => parseFloat(p.sale.replace(',', '.'))).reduce((a, i) => a + i, 0);


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
                {productList}
            </ProductsContainer>
            <AddProductForm addItem={addItem} />
            <TotalSaleContainer>
                <TotalSaleTitle>Общая скидка</TotalSaleTitle>
                <TotalSale>{totalSale}%</TotalSale>
            </TotalSaleContainer>
        </ProductCard>
    )
};


export default AddProductCard