import React, { Component } from "react";
import { Table } from "react-bootstrap";

import TickIcon from "../Components/TickIcon";

import "../Assets/Styling/Submitted.css";

export default class Submitted extends Component {
	constructor(props) {
		super(props);
		this.state = {
			applications: [
				{
					id: "abc123",
					project: "Project ABC",
					dateSubmitted: "21/05/2021",
					supervisor: "Mike Sanders",
					outcome: "APPROVED",
				},
				{
					id: "xyz312",
					project: "Project XYZ",
					dateSubmitted: "21/04/2021",
					supervisor: "Xavier Holmes",
					outcome: "PENDING",
				},
			],
		};
	}

	// ? Rendering Methods
	// * Render Dashboard Header
	dashboardHeader = () => {
		return (
			<div className="col-12 py-3">
				<div className="dashboard-header col-sm-12 col-md-3 col-lg-3"></div>
			</div>
		);
	};
	// * End of dashboardHeader()

	// * Render Elements when there are no Applications found
	emptyDashboard = () => {
		return (
			<div className="col-12 my-sm-2 my-md-5 my-lg-5">
				<div className="submitted-section col-sm-10 col-md-8 col-lg-8 align-middle">
					<h1 className="mt-5 mb-3">
						Application Submitted Successfully!
					</h1>

					<br />

					<h3>Your Application ID is ABC123</h3>

					<div className="col-12 my-5 pt-5">
						<button
							class="begin-btn py-4 col-sm-12 col-md-8 col-lg-6"
							onClick={() => {
								window.location = "/dashboard";
							}}
						>
							<h4>
								<strong>Go to Dashboard</strong>
							</h4>
						</button>
					</div>
				</div>
			</div>
		);
	};
	// * End of emptyDashboard()

	// ? End of Rendering Methods

	render() {
		return (
			<div className="dashboard-page">
				{this.dashboardHeader()}
				{this.emptyDashboard()}
			</div>
		);
	}
}
