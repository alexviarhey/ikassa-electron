import React, {useState} from 'react'
import {
    DeleteIcon,
    HeaderItem, Product,
    ProductItemAmount,
    ProductItemName,
    ProductItemNumber,
    ProductItemSale, ProductsContainer
} from "../sale-page-styles";


const AddProductCardItem = ({product, deleteItem}) => {

    const [isSelected, setIsSelected] = useState(false);
    const handleSetIsSelected = () => {
        isSelected ? setIsSelected(false) : setIsSelected(true)
    };
    return (
        <>
            <Product isSelected={isSelected} onClick={handleSetIsSelected}>
                <ProductItemName>{product.name}</ProductItemName>
                <HeaderItem>
                    <ProductItemNumber>{product.number}</ProductItemNumber>
                    <ProductItemSale>{product.sale}{product.sale.indexOf('%') < 0 && <span>%</span>}</ProductItemSale>
                </HeaderItem>
                <ProductItemAmount>
                    <span>{product.amount} BYN</span>
                    <DeleteIcon onClick={() => deleteItem(product.id)} isSelected={isSelected}/>
                </ProductItemAmount>
            </Product>
        </>
    )
};

export default AddProductCardItem