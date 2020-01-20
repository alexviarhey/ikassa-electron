import React from 'react'
import ProductsListContainer from "../SalePage/ProductsListCard/ProductsListContainer";
import {FlexSpaceBetweenContainer} from "../../styles/Container";
import ReturnProductCard from "./ReturnProductCard";
import {ReturnButton} from "../../styles/Buttons";
import {OuterContainer} from "./return-product";
import {useSelector} from "react-redux";


const ReturnProductBlock = () => {

    const products = useSelector(state => state.products.products)

    return (
        <FlexSpaceBetweenContainer>
            <ProductsListContainer products={products} height='450px' width='440px'/>
            <OuterContainer>
                <ReturnProductCard/>
                <ReturnButton>Возврат</ReturnButton>
            </OuterContainer>
        </FlexSpaceBetweenContainer>
    )
};


export default ReturnProductBlock