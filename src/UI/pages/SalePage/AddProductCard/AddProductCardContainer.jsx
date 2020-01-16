import React,{useState} from 'react'
import AddProductCard from "./AddProductCard";

const AddProductCardContainer = () => {

    const [isSelected, setIsSelected] = useState(false)

    return (
        <AddProductCard isSelected={isSelected} />
    )
};



export default AddProductCardContainer