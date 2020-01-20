import React from 'react'
import AddProductCard from "./AddProductCard";
import {addProduct, deleteProduct} from "../../../../BLL/reducers/product-reducer";

const AddProductCardContainer = ({id, products, dispatch}) => {



    const addItem = (product) => {
        dispatch(addProduct(
            {
                id,
                ...product
            }
        ))
    };

    const deleteItem = (productId) => {
        dispatch(deleteProduct(productId))
    };

    return (
        <AddProductCard deleteItem={deleteItem} addItem={addItem} products={products} />
    )
};



export default AddProductCardContainer