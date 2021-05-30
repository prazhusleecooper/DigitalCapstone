import React, { Component } from "react";
import { Button } from "react-bootstrap";

import "../Assets/Styling/OrganisationDetails.css";

export default class OrganisationDetails extends Component {
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
				<div className="col-12 p-4 text-center selected-section-btn">
					<span className="selector-text selected-section-text">
					<a style={{ color: 'yellow'}} href="/contactDetails">Organisation Details</a>	
					</span>
				</div>
				<div className="col-12 p-4 text-center non-selected-btn">
					<span className="selector-text non-selected-text">
						<a style={{ color: 'yellow'}} href="/contactDetails">Contact Details</a>
					</span>
				</div>
				<div className="col-12 p-4 text-center non-selected-btn">
					<span className="selector-text non-selected-text">
					<a style={{ color: 'yellow'}} href="/projectDetails">Project Details</a>
					</span>
				</div>
				<div className="col-12 p-4 text-center non-selected-btn">
					<span className="selector-text non-selected-text">
					<a style={{ color: 'yellow'}} href="/permissions">Permissions</a>
						
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
						<strong>Part 1 - Organisation Details</strong>
					</div>

					<div className="details-header col-12 py-2 mt-2">
						CLIENT ORGANISATION
					</div>

					<div className="details-label col-12 py-2">Name</div>
					<input
						type="text"
						className="details-input d-input-red py-2"
					/>

					<div className="details-label col-12 py-2">
						Brief Description of your business
					</div>
					<textarea className="details-input d-input-red d-text-area py-2" maxLength="250" />
					<div className="details-label col-12 py-2">Address</div>
					<textarea className="details-input d-input-red d-text-area py-2" maxLength="250"/>
					<div className="details-label col-12 py-2">Name</div>
					<input type="text" className="details-input d-last py-2" />
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
							window.location = "/contactDetails";
						}}
					>
						Part 2 &#62;&#62;
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
							window.location = "/begin";
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
