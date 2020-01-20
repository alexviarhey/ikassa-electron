import React, {useState} from 'react'
import {CheckListCard} from "../../styles/Cards";
import {Title} from "../../styles/CardTitles";
import SearchInputBlock from "../SearchInputBlock";
import {
    CheckListItem,
    CheckListItemText,
    CheckListWrapper,
    Icon,
    ItemBlock,
    ItemCenterBlock
} from "./check-list-styles";

import data from '../../../img/data.svg'
import time from '../../../img/time.svg'
import data_white from '../../../img/data_white.svg'
import time_white from '../../../img/time_white.svg'


const checkList = [
    {number: '134796', date: '29.04.2019', time: '09:15:33'},
    {number: '134796', date: '29.04.2019', time: '09:15:33'},
    {number: '134796', date: '29.04.2019', time: '09:15:33'},
    {number: '134796', date: '29.04.2019', time: '09:15:33'},
    {number: '134796', date: '29.04.2019', time: '09:15:33'},
    {number: '134796', date: '29.04.2019', time: '09:15:33'},
    {number: '134796', date: '29.04.2019', time: '09:15:33'},
    {number: '134796', date: '29.04.2019', time: '09:15:33'},
    {number: '134796', date: '29.04.2019', time: '09:15:33'},
];

const CheckList = () => {

    const [value, setValue] = useState('');


    return (
        <CheckListCard>
            <Title>Список чеков</Title>
            <SearchInputBlock value={value} onChangeHandler={setValue} placeholder='Поиск по номеру' />
            <CheckListWrapper>
                {
                    checkList.filter(i => i.number.indexOf(value) >= 0).map((i, a) => (
                        <CheckListItem isFinded={value} key={a}>
                            <ItemBlock>
                                <CheckListItemText isFinded={value}>{i.number}</CheckListItemText>
                            </ItemBlock>
                            <ItemCenterBlock>
                                <CheckListItemText isFinded={value}>{i.date}</CheckListItemText>
                                <Icon><img src={value ? data_white : data} alt=""/></Icon>
                            </ItemCenterBlock>
                            <ItemBlock>
                                <CheckListItemText isFinded={value}>{i.time}</CheckListItemText>
                                <Icon><img src={value ? time_white : time} alt=""/></Icon>
                            </ItemBlock>
                        </CheckListItem>
                    ))
                }
            </CheckListWrapper>
        </CheckListCard>
    )
};

export default CheckList