import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Contact } from "../Pages/contact";

import Dashboard from "../Pages/Dashboard";
import { Home } from "../Pages/home";
import ProfileSettings from "../Pages/ProfileSettings";
import BeginApplication from "../Pages/BeginApplication";
import OrganisationDetails from "../Pages/OrganisationDetails";
import ContactDetails from "../Pages/ContactDetails";
import ProjectDetails from "../Pages/ProjectDetails";
import Permissions from "../Pages/Permissions";
import Submitted from "../Pages/Submitted";
import { Login } from "./login";
import { Register } from "./register";

import About from "../Pages/About";

export default class RouterComponent extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/home" component={Home} />
                <Route path="/profile" component={ProfileSettings}/>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/contact" component={Contact} />
                <Route path="/begin">
					<BeginApplication />
				</Route>
				<Route path="/organisationDetails">
					<OrganisationDetails />
				</Route>
				<Route path="/contactDetails">
					<ContactDetails />
				</Route>
				<Route path="/projectDetails">
					<ProjectDetails />
				</Route>
				<Route path="/permissions">
					<Permissions />
				</Route>
				<Route path="/submitted">
					<Submitted />
				</Route>
				<Route path="/about">
					<About />
				</Route>
            </Switch>
        );
    }
}
