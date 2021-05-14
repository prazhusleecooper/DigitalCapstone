import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../Pages/Dashboard";

export default class RouterComponent extends Component {
    render() {
        return (
            <Switch>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
            </Switch>
        );
    }
}
