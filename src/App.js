import React from 'react'
import Header from "./UI/components/Header";
import {AppContainer} from "./UI/styles/Container";
import {useRoutes} from "./hooks/routes-hook";
import {useSelector} from "react-redux";



const App = () => {

    const isAuth = useSelector(state => state.authorization.isAuth);
    const routes = useRoutes(isAuth);


    return (
        <>
            <Header/>
            <AppContainer>
                {routes}
            </AppContainer>
        </>
    )
};


export default App