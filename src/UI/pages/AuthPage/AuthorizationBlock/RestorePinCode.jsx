import React from 'react'
import {RestorePinCodeLink} from "../styles";


const RestorePinCode = ({errorMessage, openRestorePinBlock}) => {
    return (
        <>
            <RestorePinCodeLink onClick={openRestorePinBlock} errorMessage={errorMessage}>
                Восстановить pin-код
            </RestorePinCodeLink>
        </>
    )
};


export default RestorePinCode