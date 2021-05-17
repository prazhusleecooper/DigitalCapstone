import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Contact } from "../Pages/contact";

import Dashboard from "../Pages/Dashboard";
import { Home } from "../Pages/home";
import ProfileSettings from "../Pages/ProfileSettings";
import { login } from "./login";
import { Register } from "./register";


export default class RouterComponent extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/home" component={Home} />
                <Route path="/profile">
                    <ProfileSettings />
                </Route>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/login" component={login} />
                <Route path="/register" component={Register} />
                <Route path="/contact" component={Contact} />
            </Switch>
        );
    }
}
