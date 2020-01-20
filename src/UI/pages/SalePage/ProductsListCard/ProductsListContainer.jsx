import React from 'react'
import ProductsList from "./ProductsList";
import {FlexSpaceBetweenContainer} from "../../../styles/Container";



const ProductsListContainer = ({width, height, products}) => {

    return (
        <FlexSpaceBetweenContainer>
            <ProductsList products={products} width={width} height={height} />
        </FlexSpaceBetweenContainer>

    )
};

export default ProductsListContainer
