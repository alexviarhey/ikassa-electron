import React from 'react'
import {HeaderWrapper, Text, TokenNumber, UpdateInfoButton} from "../styles/Header";
import logo from '../../img/logo.svg'



const Header = () => {
    return (
        <HeaderWrapper>
            <img src={logo} alt=""/>
            <TokenNumber>AVQ11019990085</TokenNumber>
            <UpdateInfoButton><Text>Обновить информацию</Text></UpdateInfoButton>
        </HeaderWrapper>
    )
};

export default Header