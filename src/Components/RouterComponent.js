import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../Pages/Dashboard";
import ProfileSettings from "../Pages/ProfileSettings";
import BeginApplication from "../Pages/BeginApplication";
import OrganisationDetails from "../Pages/OrganisationDetails";
import ContactDetails from "../Pages/ContactDetails";
import ProjectDetails from "../Pages/ProjectDetails";
import Permissions from "../Pages/Permissions";
import Submitted from "../Pages/Submitted";

export default class RouterComponent extends Component {
	render() {
		return (
			<Switch>
				<Route path="/dashboard">
					<Dashboard />
				</Route>
				<Route path="/profile">
					<ProfileSettings />
				</Route>
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
			</Switch>
		);
	}
}
