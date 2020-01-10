import React from 'react'
import {ShiftButton, XReportButton} from "../../../styles/Buttons";


const ShiftButtons = ({isShiftOpen, setIsShiftOpen}) => {
    return (
        <>
            <XReportButton isDisabled={isShiftOpen} disabled={isShiftOpen}>Х-отчёт</XReportButton>
            {
                !isShiftOpen ?
                    <ShiftButton onClick={() => setIsShiftOpen(true)} isShiftOpen>Открыть смену</ShiftButton>:
                    <ShiftButton onClick={() => setIsShiftOpen(false)}>Закрыть смену</ShiftButton>
            }
        </>
    )
};

export default ShiftButtons