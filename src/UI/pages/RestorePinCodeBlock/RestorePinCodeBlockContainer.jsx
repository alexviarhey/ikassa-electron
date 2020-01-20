import React from 'react'
import RestorePinCodeBlock from "./RestorePinCodeBlock";
import {useDispatch} from "react-redux";
import {restorePin} from "../../../BLL/reducers/auth-reducer";


const RestorePinCodeBlockContainer = () => {

    const dispatch = useDispatch();
    const confirmChangePin = (changePinData) => {
        dispatch(restorePin(changePinData))
    };


    return (
        <RestorePinCodeBlock confirmChangePin={confirmChangePin}  />
    )
};


export default RestorePinCodeBlockContainer