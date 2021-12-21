import React, {Suspense, lazy, Fragment} from 'react';
import Loader from 'react-loader'
import {createTheme} from "@mui/material";
import {ThemeProvider} from "@mui/styles";
import {Route, Routes} from "react-router-dom";
import AppHello from "./AppHello";

const Main = lazy(() => import('../src/Layout/Base'));
const theme = createTheme();

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Fragment>
                <div className="App">
                    <Suspense fallback={
                        <div className="loader-container">
                            <div className="loader-container-inner">
                                <div className="text-center">
                                    <Loader type="semi-circle-spin"/>
                                </div>
                            </div>
                        </div>
                    }>
                        {/*<Route path="/main" component={Main} />*/}
                        {/*<Router>*/}
                        {/*  <Route path='/' component={Main} />*/}
                        {/*</Router>*/}
                        {/*<Routes>*/}
                        {/*    <Route path="/" element={<AppHello />} />*/}
                            {/*<Route path="expenses" element={<Expenses />} />*/}
                            {/*<Route path="invoices" element={<Invoices />} />*/}
                        {/*</Routes>*/}
                        <Main/>
                    </Suspense>

                    {/*<Route exact path="/" render={() => (*/}
                    {/*  <Link to="/main/recipes" />*/}
                    {/*)} />*/}

                </div>
            </Fragment>
        </ThemeProvider>
    );
}

export default App;