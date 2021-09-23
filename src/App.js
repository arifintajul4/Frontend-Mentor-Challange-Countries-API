import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { browserName } from "react-device-detect";
export const AppsContext = createContext({});
const App = () => {
    const [isDark, setIsDark] = useState(false);

    if (browserName === "Chrome") {
        alert(
            "Harap gunakan browser lain dikarenakan API-nya tidak mendukung Chrome"
        );
    }
    return (
        <Router basename="/Frontend-Mentor-Challange-Countries-API">
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
