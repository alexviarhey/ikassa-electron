import React,{useState} from 'react'
import AddProductCard from "./AddProductCard";
import {useDispatch, useSelector} from "react-redux";
import {addProduct, deleteProduct} from "../../../../BLL/reducers/product-reducer";

const AddProductCardContainer = ({id, products, dispatch}) => {

    const [isSelected, setIsSelected] = useState(false);

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
        <AddProductCard deleteItem={deleteItem} addItem={addItem} products={products} isSelected={isSelected} />
    )
};



export default AddProductCardContainer