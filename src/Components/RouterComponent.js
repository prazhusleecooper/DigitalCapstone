import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../Pages/Dashboard";
import ProfileSettings from "../Pages/ProfileSettings";
import { login } from "./login";
import { Register } from "./register";


export default class RouterComponent extends Component {
    render() {
        return (
            <Switch>
                <Route path="/profile">
                    <ProfileSettings />
                </Route>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/login" component={login} />
                <Route path="/register" component={Register} />
            </Switch>
        );
    }
}
