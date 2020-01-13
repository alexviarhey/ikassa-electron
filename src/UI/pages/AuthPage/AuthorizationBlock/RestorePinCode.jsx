import React from 'react'
import {RestorePinCodeLink} from "../styles";


const RestorePinCode = ({errorMessage}) => {
    return (
        <>
            <RestorePinCodeLink errorMessage={errorMessage}>Восстановить pin-код</RestorePinCodeLink>
        </>
    )
};


export default RestorePinCode