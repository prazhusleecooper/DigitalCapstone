import React, { Component } from "react";
import { Button } from "react-bootstrap";

import TickIcon from "../Components/TickIcon";

import ProfileHeader from "../Components/ProfileHeader";
import "../Assets/Styling/OrganisationDetails.css";

export default class ContactDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			directContactName: "",
			directContactTitle: "",
			directContactWorkPhone: "",
			directContactMobile: "",
			directContactEmail: "",
			supervisorTitle: "",
			supervisorDepartment: "",
			supervisorWorkPhone: "",
			supervisorMobile: "",
			supervisorEmail: "",
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

	// * Method to navigate to project details
	navigateToProject = () => {
		if (
			this.state.directContactName === "" ||
			this.state.directContactTitle === "" ||
			this.state.directContactWorkPhone === "" ||
			this.state.directContactMobile === "" ||
			this.state.directContactEmail === "" ||
			this.state.supervisorTitle === "" ||
			this.state.supervisorDepartment === "" ||
			this.state.supervisorWorkPhone === "" ||
			this.state.supervisorMobile === "" ||
			this.state.supervisorEmail === ""
		) {
			window.alert("Please fill all details to proceed");
		} else {
			var state = this.state;
			localStorage.setItem("ContactDetails", JSON.stringify(state));
			window.location = "/projectDetails";
		}
	};
	// * End of navigateToProject()
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
						<a style={{ color: "yellow" }} href="/contactDetails">
							Organisation Details
						</a>
					</span>
					<div className="col-12">
						<TickIcon />
					</div>
				</div>
				<div className="col-12 p-4 text-center selected-section-btn">
					<span className="selector-text selected-section-text">
						<a style={{ color: "yellow" }} href="/contactDetails">
							Contact Details
						</a>
					</span>
				</div>
				<div className="col-12 p-4 text-center non-selected-btn">
					<span className="selector-text non-selected-text">
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
						<strong>Part 2 - Contact Details</strong>
					</div>

					<div className="details-header col-12 py-2 mt-2">
						DIRECT CONTACT DETAILS
					</div>

					<div className="details-label col-12 py-2">Name</div>
					<input
						type="text"
						className="details-input d-input-red py-2"
						value={this.state.directContactName}
						name="directContactName"
						onChange={this.handleInputChange}
					/>

					<div className="details-label col-12 py-2">Title</div>
					<input
						type="text"
						className="details-input d-input-red py-2"
						value={this.state.directContactTitle}
						name="directContactTitle"
						onChange={this.handleInputChange}
					/>

					{/* TWO FIELDS IN ONE ROW */}
					<div className="col-12 row px-0 mx-0">
						<div className="col-sm-12 col-md-12 col-lg-6 p-0">
							<div className="details-label col-12 py-2">
								Work Phone
							</div>
							<input
								type="text"
								className="details-input d-input-red col-12 py-2 px-1"
								value={this.state.directContactWorkPhone}
								name="directContactWorkPhone"
								onChange={this.handleInputChange}
							/>
						</div>
						<div className="col-sm-12 col-md-12 col-lg-6 p-0">
							<div className="details-label col-12 py-2">
								Mobile
							</div>
							<input
								type="text"
								className="details-input col-12 py-2 px-1"
								value={this.state.directContactMobile}
								name="directContactMobile"
								onChange={this.handleInputChange}
							/>
						</div>
					</div>

					<div className="details-label col-12 py-2">Email</div>
					<input
						type="text"
						className="details-input d-input-red py-2"
						value={this.state.directContactEmail}
						name="directContactEmail"
						onChange={this.handleInputChange}
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
						value={this.state.supervisorTitle}
						name="supervisorTitle"
						onChange={this.handleInputChange}
					/>

					<div className="details-label col-12 py-2">Department</div>
					<input
						type="text"
						className="details-input py-2"
						value={this.state.supervisorDepartment}
						name="supervisorDepartment"
						onChange={this.handleInputChange}
					/>

					{/* TWO FIELDS IN ONE ROW */}
					<div className="col-12 row px-0 mx-0">
						<div className="col-sm-12 col-md-12 col-lg-6 p-0">
							<div className="details-label col-12 py-2">
								Work Phone
							</div>
							<input
								type="text"
								className="details-input d-input-red col-12 py-2 px-1"
								value={this.state.supervisorWorkPhone}
								name="supervisorWorkPhone"
								onChange={this.handleInputChange}
							/>
						</div>
						<div className="col-sm-12 col-md-12 col-lg-6 p-0">
							<div className="details-label col-12 py-2">
								Mobile
							</div>
							<input
								type="text"
								className="details-input col-12 py-2 px-1"
								value={this.state.supervisorMobile}
								name="supervisorMobile"
								onChange={this.handleInputChange}
							/>
						</div>
					</div>

					<div className="details-label col-12 py-2">Email</div>
					<input
						type="text"
						className="details-input d-input-red d-last py-2"
						value={this.state.supervisorEmail}
						name="supervisorEmail"
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
						onClick={this.navigateToProject}
					>
						Part 3 &#62;&#62;
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
		if (localStorage.getItem("ContactDetails") !== null) {
			try {
				let contactDetails = JSON.parse(
					localStorage.getItem("ContactDetails")
				);

				this.setState({
					directContactName: contactDetails.directContactName,
					directContactTitle: contactDetails.directContactTitle,
					directContactWorkPhone:
						contactDetails.directContactWorkPhone,
					directContactMobile: contactDetails.directContactMobile,
					directContactEmail: contactDetails.directContactEmail,
					supervisorTitle: contactDetails.supervisorTitle,
					supervisorDepartment: contactDetails.supervisorDepartment,
					supervisorWorkPhone: contactDetails.supervisorWorkPhone,
					supervisorMobile: contactDetails.supervisorMobile,
					supervisorEmail: contactDetails.supervisorEmail,
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
