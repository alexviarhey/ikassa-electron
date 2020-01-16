import React from 'react'
import ProductsListContainer from "../SalePage/ProductsListCard/ProductsListContainer";
import {FlexSpaceBetweenContainer} from "../../styles/Container";
import ReturnProductCard from "./ReturnProductCard";
import {ReturnButton} from "../../styles/Buttons";
import {OuterContainer} from "./return-product";


const ReturnProductBlock = () => {
    return (
        <FlexSpaceBetweenContainer>
            <ProductsListContainer height='450px' width='440px'/>
            <OuterContainer>
                <ReturnProductCard/>
                <ReturnButton>Возврат</ReturnButton>
            </OuterContainer>

        </FlexSpaceBetweenContainer>
    )
};


export default ReturnProductBlock