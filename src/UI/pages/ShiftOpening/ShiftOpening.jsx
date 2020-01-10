import React, {useState} from 'react'
import {Container, ContainerRow} from "./styles";
import CashCardContainer from "./CashCard/CashCardContainer";
import ShiftCardContainer from "./ShiftCard/ShiftCardContainer";
import DocumentCardContainer from "./DocumentCard/DocumentCardContainer";
import ShiftButtons from "./ShiftButtons/ShiftButtons";
import SettingCardContainer from "./SettingCard/SettingCardContainer";


const ShiftOpening = () => {

    const [isShiftOpen, setIsShiftOpen] = useState(false);

    return (
        <ContainerRow>
            <Container>
                <CashCardContainer isShiftOpen={isShiftOpen}/>
                <ShiftCardContainer isShiftOpen={isShiftOpen}/>
            </Container>
            <Container>
                {
                    isShiftOpen ?
                        <SettingCardContainer/> :
                        <DocumentCardContainer isShiftOpen={isShiftOpen}/>
                }
                <ShiftButtons setIsShiftOpen={setIsShiftOpen} isShiftOpen={isShiftOpen}/>
            </Container>
        </ContainerRow>
    )
};


export default ShiftOpening