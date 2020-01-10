import React from 'react'
import Header from "./UI/components/Header";
import ShiftOpening from "./UI/pages/ShiftOpening/ShiftOpening";
import {AppContainer} from "./UI/styles/Container";
import AuthPage from "./UI/pages/AuthPage/AuthPage";



const App = () => {


    return (
        <>
            <Header />
            <AppContainer>
                <ShiftOpening />
                {/*<AuthPage />*/}
            </AppContainer>
        </>
    )
};


export default App