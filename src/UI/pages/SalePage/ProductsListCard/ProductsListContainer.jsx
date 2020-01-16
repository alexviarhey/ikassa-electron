import React from 'react'
import ProductsList from "./ProductsList";
import {FlexSpaceBetweenContainer} from "../../../styles/Container";


const ProductsListContainer = ({width, height}) => {
    return (
        <FlexSpaceBetweenContainer>
            <ProductsList width={width} height={height} />
        </FlexSpaceBetweenContainer>

    )
};

export default ProductsListContainer
