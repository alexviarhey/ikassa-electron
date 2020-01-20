import React from 'react'
import AddProductCardContainer from "./AddProductCard/AddProductCardContainer";
import ProductsListContainer from "./ProductsListCard/ProductsListContainer";
import {SalePageContainer, SalePageTopBlock} from "./sale-page-styles";
import PaymentCardContainer from "./PaymentCard/PaymentCardContainer";
import {useDispatch, useSelector} from "react-redux";

const SalePage = () => {

    const dispatch = useDispatch();
    const {id, products} = useSelector((state) => ({id: state.products.id, products: state.products.products}));

    return (
        <SalePageContainer>
            <SalePageTopBlock>
                <AddProductCardContainer dispatch={dispatch} products={products} id={id} />
                <ProductsListContainer products={products} height='290px' width='290px' />
            </SalePageTopBlock>
            <PaymentCardContainer products={products} />
        </SalePageContainer>
    )
};



export default SalePage