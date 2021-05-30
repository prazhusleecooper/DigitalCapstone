import React, { Component } from "react";
import { Button } from "react-bootstrap";

import TickIcon from "../Components/TickIcon";

import "../Assets/Styling/OrganisationDetails.css";
import ProfileHeader from "../Components/ProfileHeader";

export default class ProjectDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projectTitle: "",
			referredBy: "",
			projectLength: "",
			projectDescription: "",
			projectSpecialisations: "",
			projectSkills: "",
			projectEnvironment: "",
			researchComponent: "",
			additionalInformation: "",
		};
	}

	// ? Non-Rendering Methods
	// * Method to handle Inputs Value change
	handleInputChange = (event) => {
		this.setState({
			...this.state,
			[event.target.name]: event.target.value,
		});
	};
	// * End of handleInputChange()

	// * Method to navigate to Permissions
	navigateToPermissions = () => {
		if (
			this.state.projectTitle === "" ||
			this.state.referredBy === "" ||
			this.state.projectLength === "" ||
			this.state.projectDescription === "" ||
			this.state.projectSpecialisations === "" ||
			this.state.projectSkills === "" ||
			this.state.projectEnvironment === "" ||
			this.state.researchComponent === "" ||
			this.state.additionalInformation === ""
		) {
			window.alert("Please fill all details to proceed");
		} else {
			var state = this.state;
			localStorage.setItem("ProjectDetails", JSON.stringify(state));
			window.location = "/permissions";
		}
	};
	// * End of navigateToPermissions()
	// ? End of Non-Rendering Methods

	//

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
						<a
							style={{ color: "yellow" }}
							href="/organisationDetails"
						>
							Organisation Details
						</a>
					</span>
					<div className="col-12">
						<TickIcon />
					</div>
				</div>
				<div className="col-12 p-4 text-center non-selected-btn">
					<span className="selector-text non-selected-text">
						<a style={{ color: "yellow" }} href="/contactDetails">
							Contact Details
						</a>
					</span>
					<div className="col-12">
						<TickIcon />
					</div>
				</div>
				<div className="col-12 p-4 text-center selected-section-btn">
					<span className="selector-text selected-section-text">
						<a style={{ color: "yellow" }} href="/projectDetails">
							Project Details
						</a>
					</span>
				</div>
				<div className="col-12 p-4 text-center non-selected-btn">
					<span className="selector-text non-selected-text">
						<a style={{ color: "yellow" }} href="/permissions">
							Permissions
						</a>
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
				<div className="od-selected-dashboard col-11 p-3 p-md-3 p-lg-4">
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
						value={this.state.projectTitle}
						name="projectTitle"
						onChange={this.handleInputChange}
					/>

					<div className="details-label-multi-line col-12 py-2">
						<strong>Referred by</strong>
						<br />
						<em>Who referred you to Swinburne</em>
					</div>
					<input
						type="text"
						className="details-input py-2"
						value={this.state.referredBy}
						name="referredBy"
						onChange={this.handleInputChange}
					/>

					<div className="details-label-multi-line col-12 py-2">
						<strong>Estimated Project Length</strong>
						<br />
						<em>
							e.g. 1 semester (12weeks), or 2 semesters(24 weeks)
						</em>
					</div>
					<input
						type="text"
						className="details-input py-2"
						value={this.state.projectLength}
						name="projectLength"
						onChange={this.handleInputChange}
					/>

					<div className="details-label-multi-line col-12 py-2">
						<strong>Project Description</strong>
						<br />
						<em>
							One Project per Proposal please. Brief description
							of project being proposed. Additional information
							can be added at the end of the proposal.
						</em>
					</div>
					<textarea
						className="details-input d-input-red d-text-area py-2"
						maxLength="250"
						value={this.state.projectDescription}
						name="projectDescription"
						onChange={this.handleInputChange}
					/>

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
					<textarea
						className="details-input d-text-area py-2"
						value={this.state.projectSpecialisations}
						name="projectSpecialisations"
						onChange={this.handleInputChange}
					/>

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
					<textarea
						className="details-input d-text-area py-2"
						value={this.state.projectSkills}
						name="projectSkills"
						onChange={this.handleInputChange}
					/>

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
					<textarea
						className="details-input d-text-area py-2"
						value={this.state.projectEnvironment}
						name="projectEnvironment"
						onChange={this.handleInputChange}
					/>

					<div className="details-label-multi-line col-12 py-2">
						<strong>Research Component</strong>
						<br />
						<em>
							Hardware/Software/ Programming Languages e.g.
							Android; IOS; C++; HTML; CSS; Java; SQL; NoSQL;
							AngularJS; ReactJS; XML, Windows etc.
						</em>
					</div>
					<textarea
						className="details-input d-text-area py-2"
						maxLength="250"
						value={this.state.researchComponent}
						name="researchComponent"
						onChange={this.handleInputChange}
					/>

					<div className="details-label-multi-line col-12 py-2">
						<strong>Additional information</strong>
						<br />
						<em>
							Include additional information relevant to the
							proposal here.
						</em>
					</div>
					<textarea
						className="details-input d-text-area d-last py-2"
						value={this.state.additionalInformation}
						name="additionalInformation"
						onChange={this.handleInputChange}
					/>
				</div>

				<div className="od-footer col-11 p-md-3 p-lg-4 mt-3 mt-md-0">
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
						onClick={this.navigateToPermissions}
					>
						Part 4 &#62;&#62;
					</Button>
				</div>
			</div>
		);
	};
	// * End of selectedDashboard()

	// ? End of Rendering Methods

	//

	// ? Lifecycle Methods
	componentDidMount = () => {
		if (localStorage.getItem("ProjectDetails") !== null) {
			try {
				let projectDetails = JSON.parse(
					localStorage.getItem("ProjectDetails")
				);

				this.setState({
					projectTitle: projectDetails.projectTitle,
					referredBy: projectDetails.referredBy,
					projectLength: projectDetails.projectLength,
					projectDescription: projectDetails.projectDescription,
					projectSpecialisations:
						projectDetails.projectSpecialisations,
					projectSkills: projectDetails.projectSkills,
					projectEnvironment: projectDetails.projectEnvironment,
					researchComponent: projectDetails.researchComponent,
					additionalInformation: projectDetails.additionalInformation,
				});
			} catch (err) {
				console.log("THE ERROR:", err);
			}
		}
	};
	// ? End of Lifecycle Methods

	render() {
		return (
			<div className="org-details-page">
				<ProfileHeader />
				{this.dashboardHeader()}
				<div className="col-11 px-5">
					<button
						style={{
							background: "red",
							color: "white",
							border: "0px",
						}}
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
