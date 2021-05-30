import React, { Component } from "react";
import { Button } from "react-bootstrap";

import "../Assets/Styling/OrganisationDetails.css";
import ProfileHeader from "../Components/ProfileHeader";
export default class OrganisationDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			description: "",
			address: "",
			website: "",
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

	// * Method to navigate to contact details
	navigateToContact = () => {
		if (
			this.state.name === "" ||
			this.state.description === "" ||
			this.state.address === "" ||
			this.state.website === ""
		) {
			window.alert("Please fill all details to proceed");
		} else {
			var state = this.state;
			localStorage.setItem("OrganisationDetails", JSON.stringify(state));
			window.location = "/contactDetails";
		}
	};
	// * End of navigateToContact()
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
				<div className="col-12 p-4 text-center selected-section-btn">
					<span className="selector-text selected-section-text">
						<a style={{ color: "yellow" }} href="/contactDetails">
							Organisation Details
						</a>
					</span>
				</div>
				<div className="col-12 p-4 text-center non-selected-btn">
					<span className="selector-text non-selected-text">
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
						<strong>Part 1 - Organisation Details</strong>
					</div>

					<div className="details-header col-12 py-2 mt-2">
						CLIENT ORGANISATION
					</div>

					<div className="details-label col-12 py-2">Name</div>
					<input
						type="text"
						className="details-input d-input-red py-2"
						value={this.state.name}
						name="name"
						onChange={this.handleInputChange}
					/>

					<div className="details-label col-12 py-2">
						Brief Description of your business
					</div>
					<textarea
						className="details-input d-input-red d-text-area py-2"
						maxLength="250"
						value={this.state.description}
						name="description"
						onChange={this.handleInputChange}
					/>
					<div className="details-label col-12 py-2">Address</div>
					<textarea
						className="details-input d-input-red d-text-area py-2"
						maxLength="250"
						value={this.state.address}
						name="address"
						onChange={this.handleInputChange}
					/>
					<div className="details-label col-12 py-2">website</div>
					<input
						type="text"
						className="details-input d-last py-2"
						value={this.state.website}
						name="website"
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
						onClick={this.navigateToContact}
					>
						Part 2 &#62;&#62;
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
		if (localStorage.getItem("OrganisationDetails") !== null) {
			try {
				let organisationDetails = JSON.parse(
					localStorage.getItem("OrganisationDetails")
				);

				this.setState({
					name: organisationDetails.name,
					description: organisationDetails.description,
					address: organisationDetails.address,
					website: organisationDetails.website,
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
