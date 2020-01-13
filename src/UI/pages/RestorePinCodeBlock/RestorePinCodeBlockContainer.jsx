import React, {useState} from 'react'
import RestorePinCodeBlock from "./RestorePinCodeBlock";


const RestorePinCodeBlockContainer = () => {

    const [errorMessage, setErrorMessage] = useState(false);

    const setError = () => {
        if (errorMessage) {
            setErrorMessage(false)
        } else {
            setErrorMessage(true)
        }
    };


    return (
        <RestorePinCodeBlock errorMessage={errorMessage} setErrorMessage={setError}/>
    )
};


export default RestorePinCodeBlockContainer