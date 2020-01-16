import React from 'react'
import AddProductCardContainer from "./AddProductCard/AddProductCardContainer";
import ProductsListContainer from "./ProductsListCard/ProductsListContainer";
import {SalePageContainer, SalePageTopBlock} from "./sale-page-styles";
import PaymentCardContainer from "./PaymentCard/PaymentCardContainer";

const SalePage = () => {
    return (
        <SalePageContainer>
            <SalePageTopBlock>
                <AddProductCardContainer />
                <ProductsListContainer height='290px' width='290px' />
            </SalePageTopBlock>
            <PaymentCardContainer />
        </SalePageContainer>
    )
};



export default SalePage