import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

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
	addCustomOption = (inputId, selectTagId) => {
		let val = document.getElementById(inputId).value;
		if (!val) {
			alert('please fill the blank field')
		}
		var x = document.getElementById(selectTagId);
		var option = document.createElement("option");
		option.text = val;
		option.value= val;
		document.getElementById(inputId).value= '';
		x.add(option);
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
						<Form.Group className="col-lg-12 col-md-12 col-sm-12">
						<Form.Control as="select" onChange={this.handleInputChange} name="projectSpecialisations" id="project-specialisation">
							<option value="">select an option</option>
							<option value="research">Research</option>
							<option value="Mobile Application Design (Android & IOS)">Mobile Application Design (Android & IOS)</option>
							<option value="Network Design & Security"> Network Design & Security</option>
							<option value="Robotics">Robotics</option>
							<option value="Application Development">Application Development</option>
							<option value="Systems Analysis">Systems Analysis</option>
							<option value="Web Development & Design etc"> Web Development & Design etc</option>
						</Form.Control>
						</Form.Group>
						<div className="pl-3" > 
						<input id="spec" placeholder="others"/>
						<button className="ml-2 btn btn-primary" onClick={() =>this.addCustomOption('spec','project-specialisation')}>add </button>
						</div>
						</em>
					</div>

					<div className="details-label-multi-line col-12 py-2">
						<strong>Project Skills</strong>
						<br />
						<em>
						<Form.Group className="col-lg-12 col-md-12 col-sm-12">
						<Form.Control as="select" onChange={this.handleInputChange} name="projectSkills" id="project-skills">
							<option value="">select an option</option>
							<option value="BusinessAnalysis"> BusinessAnalysis</option>
							<option value="Mobile Application Design (Android & IOS)">Mobile Application Design (Android & IOS)</option>
							<option value="Systems Analysis">Systems Analysis</option>
							<option value="Robotics">Robotics</option>
							<option value="Project Management">Project Management</option>
							<option value="Systems Analysis">Systems Analysis</option>
							<option value="Software Programming">Software Programming</option>
							<option value="IOS">IOS</option>
							<option value="Android">Android</option>
							<option value="Business Intelligence">Business Intelligence </option>
						</Form.Control>
						</Form.Group>
						<div className="pl-3" > 
						<input id="skills"  placeholder="others"/>
						<button className="ml-2 btn btn-primary"  onClick={() =>this.addCustomOption('skills','project-skills')}>add </button>
						</div>
						</em>
					</div>

					<div className="details-label-multi-line col-12 py-2">
						<strong>Project Environment</strong>
						<br />
						<em>
							<Form.Group className="col-lg-12 col-md-12 col-sm-12">
							<Form.Control as="select" onChange={this.handleInputChange} name="projectEnvironment" id="project-environment">
								<option value="">select an option</option>
								<option value="Android"> Android</option>
								<option value="IOS">IOS</option>
								<option value="C++">C++</option>
								<option value="HTML">HTML</option>
								<option value="CSS">CSS</option>
								<option value="Systems Analysis">Systems Analysis</option>
								<option value="Java">Java</option>
								<option value="SQL">SQL</option>
								<option value="Android">Android</option>
								<option value="ReactJS">ReactJS</option>
								<option value="AngulasJS">AngularJS</option>
								<option value="XML">XML</option>
								<option value="windows">Windows</option>
							</Form.Control>
							</Form.Group>
							<div className="pl-3" > 
							<input id="env" placeholder="others"/>
							<button className="ml-2 btn btn-primary" onClick={ () => this.addCustomOption('env','project-environment')}>add </button>
							</div>
						</em>
					</div>

					<div className="details-label-multi-line col-12 py-2">
						<strong>Research Component</strong>
						<br />
						<em>
							where applicable use this section to the state topic of research relevant to this project.
							this may be part of project or the entire project.if nothing N/A
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
						maxLength="250"
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
