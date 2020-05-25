import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import InputForm from "./components/sendmessage/InputForm";

ReactDom.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <App />
            </Route>

            <Route path="/sendMessage">
                <InputForm />
            </Route>
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);

{/* <App /> */ }