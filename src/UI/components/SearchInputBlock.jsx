import React from 'react'
import {SearchInput} from "../styles/Inputs";
import {SearchButton} from "../styles/Buttons";
import check from "../../img/check_button.svg";
import {SearchBlockWrapper} from "../pages/SalePage/ProductsListCard/product-list-styles";


const SearchInputBlock = ({placeholder, onChangeHandler, value}) => {


    return (
        <SearchBlockWrapper>
            <SearchInput value={value} onChange={(e) => onChangeHandler(e.currentTarget.value)} placeholder={placeholder}/>
            <SearchButton><img src={check} alt=""/></SearchButton>
        </SearchBlockWrapper>
    )
};

export default SearchInputBlock