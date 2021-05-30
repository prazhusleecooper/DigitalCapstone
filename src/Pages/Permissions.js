import React, { Component } from "react";
import { Button } from "react-bootstrap";

import TickIcon from "../Components/TickIcon";

import "../Assets/Styling/OrganisationDetails.css";

export default class Permissions extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	// ? Rendering Methods
	// * Render Dashboard Header
	dashboardHeader = () => {
		return (
			<div className="col-12 py-3">
				<div className="org-details-header col-sm-12 col-md-3 col-lg-3">
					<h1>
						<strong>Proposal Details</strong>
					</h1>
				</div>
			</div>
		);
	};
	// * End of dashboardHeader()

	// * Default Dashboard - Dashboard when there is atleast one applcation
	defaultDashboard = () => {
		return (
			<div className="od-default-dashboard row mt-5">
				{this.dashboardSelector()}
				{this.selectedDashboard()}
			</div>
		);
	};
	// * End of defaultDashboard()

	// * Render the dashboard selector
	dashboardSelector = () => {
		return (
			<div className="col-sm-12 col-md-12 col-lg-2 col-xl-2 p-0 mb-5">
				<div className="col-12 p-4 text-center non-selected-btn">
					<span className="selector-text non-selected-text">
					<a style={{ color: 'yellow'}} href="/organisationDetails">Organisation Details</a>						
					</span>
					<div className="col-12">
						<TickIcon />
					</div>
				</div>
				<div className="col-12 p-4 text-center non-selected-btn">
					<span className="selector-text non-selected-text">
					<a style={{ color: 'yellow'}} href="/contactDetails">Contact Details</a>
					</span>
					<div className="col-12">
						<TickIcon />
					</div>
				</div>
				<div className="col-12 p-4 text-center non-selected-btn">
					<span className="selector-text non-selected-text">
					<a style={{ color: 'yellow'}} href="/projectDetails">Project Details</a>		
					</span>
					<div className="col-12">
						<TickIcon />
					</div>
				</div>
				<div className="col-12 p-4 text-center selected-section-btn">
					<span className="selector-text selected-section-text">
					<a style={{ color: 'yellow'}} href="/permissions">permission</a>		
					</span>
				</div>
			</div>
		);
	};
	// * End of dashboardSelector()

	// * Render the Selected Dashboard elements
	selectedDashboard = () => {
		return (
			<div className="col-sm-12 col-md-12 col-lg-10 p-0">
				<div className="od-selected-dashboard col-11 p-md-3 p-lg-4">
					<div className="col-12 px-0">
						<strong>
							Part 4 - Permission to market the Proposal to
							Students
						</strong>
					</div>

					<div
						className="details-label-multi-line col-12 py-2 px-0"
						style={{ backgroundColor: "#FFFFFF", border: 0 }}
					>
						Swinburne University seeks permission to market an
						overview of your project to prospective students, as an
						example of the types of projects offered under the
						Capstone Project unit. This will occur prior to the
						start of a semester to attract interested students to
						form teams to work on the project.
						<br />
						<br />
						<br />
						No company or personal details will be identified at
						this time.
					</div>

					<div style={{ height: "200px" }} />

					<div
						className="details-label-multi-line col-12 py-2 px-0"
						style={{
							backgroundColor: "#FFFFFF",
							border: 0,
							borderTop: "2px solid black",
						}}
					>
						I Agree to allow details of this proposal to be marketed
						to prospective students for the purposes of team
						formation.
					</div>

					<div className="row col-12 px-0 mx-0 permission-row ">
						<span className="col-sm-12 col-md-2 py-2 px-0">
							Name:
						</span>
						<input
							type="text"
							className="details-input d-input-red col-sm-12 col-md-10 py-2"
							style={{ border: 0 }}
						/>
					</div>

					<div className="row col-12 px-0 mx-0 permission-row ">
						<span className="col-sm-12 col-md-2 py-2 px-0">
							Position:
						</span>
						<input
							type="text"
							className="details-input col-sm-12 col-md-10 py-2"
							style={{ border: 0 }}
						/>
					</div>

					<div className="row col-12 px-0 mx-0 permission-row ">
						<span className="col-sm-12 col-md-2 py-2 px-0">
							Date:
						</span>
						<input
							type="text"
							className="details-input d-input-red col-sm-12 col-md-10 py-2"
							style={{ border: 0 }}
						/>
					</div>
				</div>

				<div className="od-footer col-11 p-md-3 p-lg-4">
					<Button
						onClick={() => {
							window.location = "/dashboard";
						}}
					>
						CANCEL
					</Button>{" "}
					&nbsp;&nbsp;
					<Button
						className="proceed-btn"
						onClick={() => {
							window.location = "/submitted";
						}}
					>
						SUBMIT
					</Button>
				</div>
			</div>
		);
	};
	// * End of selectedDashboard()

	// ? End of Rendering Methods

	render() {
		return (
			<div className="org-details-page">
				{this.dashboardHeader()}
				<div className="col-11 px-5">
					<button
						style={{
							background:'red',
							color:'white',
							border:'0px'
						}}
						onClick={() => {
							window.location = "/projectDetails";
						}}
					>
						&#60;&#60;GO BACK
					</button>
				</div>
				{this.defaultDashboard()}
			</div>
		);
	}
}
