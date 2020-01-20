import React from 'react'
import {Title} from "../../styles/CardTitles";
import {ButtonWrapper, ReportItemsOuter, ReportItemWrapper, ReportTitle, ReportValue} from "./report-styles";
import {PrintOutButton} from "../../styles/Buttons";

const Report = ({reportItems, buttonTitle, title}) => {
    return (
        <>
            <Title>{title}</Title>
            <ReportItemsOuter>
                {
                    reportItems.map((item, index) => (
                        <ReportItemWrapper key={index}>
                            <ReportTitle>{item.title}</ReportTitle>
                            <ReportValue>{item.value}</ReportValue>
                        </ReportItemWrapper>
                    ))
                }
            </ReportItemsOuter>
            <ButtonWrapper>
                <PrintOutButton>{buttonTitle}</PrintOutButton>
            </ButtonWrapper>
        </>
    )
};


export default Report