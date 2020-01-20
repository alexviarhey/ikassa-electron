import React from 'react'

import ShiftOpening from "../UI/pages/ShiftOpening/ShiftOpening";
import {Route, Switch} from "react-router-dom";
import SalePage from "../UI/pages/SalePage/SalePage";
import ReportContainer from "../UI/pages/Report/ReportContainer";
import CheckList from "../UI/components/CheckList/CheckList";
import AuthPage from "../UI/pages/AuthPage/AuthPage";
import EnterCheckNumber from "../UI/components/ EnterCheckNumber/EnterCheckNumber";
import ReturnProductBlock from "../UI/pages/ReturnProductBlock/ReturnProductBlock";



export const useRoutes = (isAuth) => {
    if(isAuth) return (
        <Switch>
            <Route path='/shiftOpening' component={ShiftOpening}/>
            <Route path='/salePage' component={SalePage}/>
            <Route path='/returnProductBlock' component={ReturnProductBlock}/>
            <Route path='/report'
                   component={() => <ReportContainer buttonTitle='Распечатать z-отчёт и закрыть смену' title='Z-отчёт' />}/>
            <Route path='/checkList' component={CheckList}/>
            <Route path='/enterCheckNumber' component={EnterCheckNumber}/>

            <Route path='/' component={ShiftOpening}/>
        </Switch>
    );
    return (
        <Switch>
            <Route path='/' component={AuthPage}/>
        </Switch>
    )
};