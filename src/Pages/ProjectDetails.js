import React, { Component } from "react";
import { Button } from "react-bootstrap";

import TickIcon from "../Components/TickIcon";

import "../Assets/Styling/OrganisationDetails.css";

export default class ProjectDetails extends Component {
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
				<div className="col-12 p-4 text-center non-selected-btn">
					<span className="selector-text non-selected-text">
						Contact Details
					</span>
					<div className="col-12">
						<TickIcon />
					</div>
				</div>
				<div className="col-12 p-4 text-center selected-section-btn">
					<span className="selector-text selected-section-text">
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
						<strong>Part 3 - Project Details</strong>
					</div>

					<div className="details-header col-12 py-2 mt-2">
						PROJECT DETAILS
					</div>

					<div className="details-label col-12 py-2">
						Project Title
					</div>
					<input
						type="text"
						className="details-input d-input-red py-2"
					/>

					<div className="details-label-multi-line col-12 py-2">
						<strong>Referred by</strong>
						<br />
						<em>Who referred you to Swinburne</em>
					</div>
					<input type="text" className="details-input py-2" />

					<div className="details-label-multi-line col-12 py-2">
						<strong>Estimated Project Length</strong>
						<br />
						<em>
							e.g. 1 semester (12weeks), or 2 semesters(24 weeks)
						</em>
					</div>
					<input type="text" className="details-input py-2" />

					<div className="details-label-multi-line col-12 py-2">
						<strong>Project Description</strong>
						<br />
						<em>
							One Project per Proposal please. Brief description
							of project being proposed. Additional information
							can be added at the end of the proposal.
						</em>
					</div>
					<textarea className="details-input d-input-red d-text-area py-2" />

					<div className="details-label-multi-line col-12 py-2">
						<strong>Project Specialisations Area</strong>
						<br />
						<em>
							e.g. Research, Mobile Application Design (Android &
							IOS); Database Design; Network Design & Security;
							Robotics; Application Development; Systems Analysis
							& Design; Web Development & Design etc.
						</em>
					</div>
					<textarea className="details-input d-text-area py-2" />

					<div className="details-label-multi-line col-12 py-2">
						<strong>Project Skills</strong>
						<br />
						<em>
							Brief description of any specific skills students
							will require undertaking this project. e.g. Business
							Analysis; Systems Analysis; Project Management;
							Software Programming; OIS; Android; Business
							Intelligence etc.
						</em>
					</div>
					<textarea className="details-input d-text-area py-2" />

					<div className="details-label-multi-line col-12 py-2">
						<strong>Project Environment</strong>
						<br />
						<em>
							Hardware/Software/ Programming Languages
							<br />
							e.g. Android; IOS; C++; HTML; CSS; Java; SQL; NoSQL;
							AngularJS; ReactJS; XML, Windows etc.
						</em>
					</div>
					<textarea className="details-input d-text-area py-2" />

					<div className="details-label-multi-line col-12 py-2">
						<strong>Research Component</strong>
						<br />
						<em>
							Hardware/Software/ Programming Languages e.g.
							Android; IOS; C++; HTML; CSS; Java; SQL; NoSQL;
							AngularJS; ReactJS; XML, Windows etc.
						</em>
					</div>
					<textarea className="details-input d-text-area py-2" />

					<div className="details-label-multi-line col-12 py-2">
						<strong>Additional information</strong>
						<br />
						<em>
							Include additional information relevant to the
							proposal here.
						</em>
					</div>
					<textarea className="details-input d-text-area d-last py-2" />
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
							window.location = "/permissions";
						}}
					>
						Part 4 &#62;&#62;
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
						className="go-back-btn"
						onClick={() => {
							window.location = "/contactDetails";
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
