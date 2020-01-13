import React, {useState} from 'react'
import AuthorizationBlock from "./AuthorizationBlock";


const AuthorizationBlockContainer = () => {

    const [errorMessage, setErrorMessage] = useState(false);
    return (
        <div>
            <AuthorizationBlock errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
        </div>
    )
};


export default AuthorizationBlockContainer