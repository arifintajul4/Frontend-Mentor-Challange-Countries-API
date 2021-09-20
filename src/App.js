import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

export const AppsContext = React.createContext({});
const App = () => {
    const [isDark, setIsDark] = useState(false);
    return (
        <Router>
            <AppsContext.Provider value={{ isDark, setIsDark }}>
                <Navbar />
                <Switch>
                    <Route path="/detail/:countryCode">
                        <Detail />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </AppsContext.Provider>
        </Router>
    );
};

export default App;
