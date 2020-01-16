import React from 'react'
import Header from "./UI/components/Header";
import {AppContainer} from "./UI/styles/Container";
import RestorePinCodeBlockContainer from "./UI/pages/RestorePinCodeBlock/RestorePinCodeBlockContainer";
import AuthPage from "./UI/pages/AuthPage/AuthPage";
import ShiftOpening from "./UI/pages/ShiftOpening/ShiftOpening";
import SalePage from "./UI/pages/SalePage/SalePage";
import ReturnProductBlock from "./UI/pages/ReturnProductBlock/ReturnProductBlock";




const App = () => {


    return (
        <>
            <Header />
            <AppContainer>
                {/*<ShiftOpening />*/}
                {/*<AuthPage />
                <RestorePinCodeBlockContainer />*/}
                {/*<SalePage />*/}
                <ReturnProductBlock />
            </AppContainer>
        </>
    )
};


export default App