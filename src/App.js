import React from 'react'
import Header from "./UI/components/Header";
import {AppContainer} from "./UI/styles/Container";
import RestorePinCodeBlockContainer from "./UI/pages/RestorePinCodeBlock/RestorePinCodeBlockContainer";
import AuthPage from "./UI/pages/AuthPage/AuthPage";
import ShiftOpening from "./UI/pages/ShiftOpening/ShiftOpening";
import SalePage from "./UI/pages/SalePage/SalePage";
import ReturnProductBlock from "./UI/pages/ReturnProductBlock/ReturnProductBlock";
import ReportContainer from "./UI/pages/Report/ReportContainer";
import EnterCheckNumber from "./UI/components/ EnterCheckNumber/EnterCheckNumber";
import CheckList from "./UI/components/CheckList/CheckList";




const App = () => {


    return (
        <>
            <Header />
            <AppContainer>
                {/*<ShiftOpening />*/}
                {/*<AuthPage />*/}
                {/*<RestorePinCodeBlockContainer />*/}
                {/*<SalePage />*/}
                {/*<ReturnProductBlock />*/}
                {/*<ReportContainer buttonTitle='Распечатать z-отчёт и закрыть смену' title='Z-отчёт' />*/}
                {/*<EnterCheckNumber />*/}
                <CheckList />
            </AppContainer>
        </>
    )
};


export default App