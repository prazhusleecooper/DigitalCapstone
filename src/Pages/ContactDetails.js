import React, { Component } from "react";
import { Button } from "react-bootstrap";

import TickIcon from "../Components/TickIcon";

import "../Assets/Styling/OrganisationDetails.css";

export default class ContactDetails extends Component {
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
						Organisation Details
					</span>
					<div className="col-12">
						<TickIcon />
					</div>
				</div>
				<div className="col-12 p-4 text-center selected-section-btn">
					<span className="selector-text selected-section-text">
						Contact Details
					</span>
				</div>
				<div className="col-12 p-4 text-center non-selected-btn">
					<span className="selector-text non-selected-text">
						Project Details
					</span>
				</div>
				<div className="col-12 p-4 text-center non-selected-btn">
					<span className="selector-text non-selected-text">
						Permissions
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
						<strong>Part 2 - Contact Details</strong>
					</div>

					<div className="details-header col-12 py-2 mt-2">
						DIRECT CONTACT DETAILS
					</div>

					<div className="details-label col-12 py-2">Name</div>
					<input
						type="text"
						className="details-input d-input-red py-2"
					/>

					<div className="details-label col-12 py-2">Title</div>
					<input
						type="text"
						className="details-input d-input-red py-2"
					/>

					{/* TWO FIELDS IN ONE ROW */}
					<div className="col-12 row px-0 mx-0">
						<div className="col-sm-12 col-md-12 col-lg-6 p-0">
							<div className="details-label col-12 py-2">
								Work Phone
							</div>
							<input
								type="text"
								className="details-input d-input-red col-12 py-2"
							/>
						</div>
						<div className="col-sm-12 col-md-12 col-lg-6 p-0">
							<div className="details-label col-12 py-2">
								Mobile
							</div>
							<input
								type="text"
								className="details-input col-12 py-2"
							/>
						</div>
					</div>

					<div className="details-label col-12 py-2">Email</div>
					<input
						type="text"
						className="details-input d-input-red py-2"
					/>

					<div className="details-header col-12 py-2">
						CLIENT/ORGANISATION PROJECT SUPERVISOR
					</div>

					<div className="details-label-multi-line col-12 py-2">
						<strong>Name</strong>
						<br />
						<em>
							Who, from your Organisation, will be supervising the
							project?
						</em>
						<br />
						<em>Please allocate only one person to begin with.</em>
					</div>

					<div className="details-label col-12 py-2">Title</div>
					<input
						type="text"
						className="details-input d-input-red py-2"
					/>

					<div className="details-label col-12 py-2">Department</div>
					<input type="text" className="details-input py-2" />

					{/* TWO FIELDS IN ONE ROW */}
					<div className="col-12 row px-0 mx-0">
						<div className="col-sm-12 col-md-12 col-lg-6 p-0">
							<div className="details-label col-12 py-2">
								Work Phone
							</div>
							<input
								type="text"
								className="details-input d-input-red col-12 py-2"
							/>
						</div>
						<div className="col-sm-12 col-md-12 col-lg-6 p-0">
							<div className="details-label col-12 py-2">
								Mobile
							</div>
							<input
								type="text"
								className="details-input col-12 py-2"
							/>
						</div>
					</div>

					<div className="details-label col-12 py-2">Email</div>
					<input
						type="text"
						className="details-input d-input-red py-2"
					/>
				</div>

				<div className="od-footer col-11 p-md-3 p-lg-4">
					<span
						className="d-cancel-btn"
						onClick={() => {
							window.location = "/dashboard";
						}}
					>
						CANCEL
					</span>{" "}
					&nbsp;&nbsp;
					<Button
						className="proceed-btn"
						onClick={() => {
							window.location = "/projectDetails";
						}}
					>
						Part 3 &#62;&#62;
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
							window.location = "/organisationDetails";
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
