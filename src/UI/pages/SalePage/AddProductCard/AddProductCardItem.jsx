import React, {useState} from 'react'
import {
    DeleteIcon,
    HeaderItem, Product,
    ProductItemAmount,
    ProductItemName,
    ProductItemNumber,
    ProductItemSale, ProductsContainer
} from "../sale-page-styles";


const AddProductCardItem = () => {

    const [isSelected, setIsSelected] = useState(false);
    const handleSetIsSelected = () => {
        isSelected ? setIsSelected(false) : setIsSelected(true)
    };
    return (
        <>
            <Product isSelected={isSelected} onClick={handleSetIsSelected}>
                <ProductItemName>Хлеб</ProductItemName>
                <HeaderItem>
                    <ProductItemNumber>1</ProductItemNumber>
                    <ProductItemSale>0%</ProductItemSale>
                </HeaderItem>
                <ProductItemAmount>
                    <span>547,59 BYN</span>
                    <DeleteIcon isSelected={isSelected}/>
                </ProductItemAmount>
            </Product>
        </>
    )
};

export default AddProductCardItem