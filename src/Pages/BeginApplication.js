import React, { Component } from "react";
import { Button } from "react-bootstrap";

import ProfileHeader from "../Components/ProfileHeader";
import "../Assets/Styling/BeginApplication.css";

export default class BeginApplication extends Component {
	constructor(props) {
		super(props);
		this.state = {
			agreeToTerms: false,
		};
	}

	// ? Rendering Methods
	// * Render Begin Application Header
	BeginApplicationHeader = () => {
		return (
			<div className="col-12 py-3">
				<div className="begin-application-header col-sm-12 col-md-6 col-lg-5">
					<h1>
						<strong>Begin An Application</strong>
					</h1>
				</div>
			</div>
		);
	};
	// * End of dashboardHeader()

	// * Render the Selected Dashboard elements
	beginApplicationContent = () => {
		return (
			<div className="col-12 p-0">
				<div className="begin-application-content col-sm-11 col-md-10 col-lg-10 p-md-3 p-lg-4">
					<button
						className="go-back-btn"
						onClick={() => {
							window.location = "/dashboard";
						}}
					>
						&#60;&#60;GO BACK
					</button>
					<br />
					<br />
					<strong>The Capstone Projects Program</strong> <br />
					Thank you for proposing a project for our Capstone Projects
					Program. Projects like yours offer our students an
					invaluable learning experience. We appreciate the
					opportunity you have provided and the time you have chosen
					to commit to the professional development of our students.
					<br />
					<br />
					The Capstone Projects Program is run through the Department
					of Computer Science and Software Engineering through the
					Faculty of Science, Engineering and Technology at Swinburne
					University, located in Hawthorn. It includes different
					Capstone Project topics, each offering students a
					professional development learning opportunity.
					<br />
					<br />
					This proposal form provides Swinburne University to begin
					the process involved in hosting a Capstone Project.
					<br />
					<br />
					<strong>Purpose of this form</strong> <br />
					Use this document to provide relevant project details about
					your organization and your project proposal. After providing
					details send the proposal back to the faculty Capstone
					Projects Coordinator (email provided at the end of this
					document).
					<br />
					<br />
					<em>Note:</em>
					<br />
					Please use simple text formatting as the data within this
					document is exported into our Projects database and
					formatting is lost during the export process, and only enter
					one project per proposal form and save as a Word document.
					<br />
					<br />
					<strong>General Purpose</strong>
					<br />
					The purpose of this exercise is to provide an educational
					opportunity for the Student(s) to obtain real-world
					experience as part of their course of study.
					<br />
					<br />
					The Contracting Party or Host Organisation wishes to support
					the skills development of the Students by providing details
					of their project to Swinburne University and agrees to
					provide the Students with the opportunity to undertake the
					Project.
					<br />
					<br />
					All parties acknowledge that Project details may vary as the
					skills of the Student(s) are assessed or the Project
					requirements change.
					<br />
					<br />
					<strong>Guarantees</strong>
					<br />
					Neither Swinburne University, nor the Student(s), provides
					any guarantee in relation to the quality, originality,
					operability, delivery or any other aspect of any work
					undertaken, or material produced by the Student(s) as part
					of the Project.
					<br />
					<br />
					<strong>Offer of a Proof of Concept or Prototype</strong>
					<br />
					Swinburne University will provide a “proof of concept” or
					“prototype” for the client. It is not able to provide a
					commercially ready product.
					<br />
					<br />
					<strong>
						Client Relationship with Swinburne University
					</strong>
					<br />
					The relationship between the parties is voluntary and
					involves no payment or only nominal work experience payments
					within regulatory requirements.
					<br />
					<br />
					<strong>Intellectual Property</strong>
					<br />
					Swinburne University will arrange for the Students to assign
					any Intellectual Property in the Projects to Swinburne
					University. Swinburne University will then assign the
					Project IP to the Contracting Party or Host Organisation.
					<br />
					<br />
					<strong>
						Project Obligations and Student Project Agreement
					</strong>
					<br />
					The Contracting Party, or Host Organisation, and Swinburne
					University agree to perform their obligations in accordance
					with the terms and conditions of the STUDENT PROJECT
					AGREEMENT.
					<br />
					<br />
					The STUDENT PROJECT AGREEMENT will be issued to the
					Contracting Party or Host Organisation once their Project
					has been accepted by Swinburne University and students have
					been assigned to the project.
					<br />
					<br />
					<br />
					<strong>
						Please continue to the next section of the proposal
						form. There are 3 sections to be completed. When
						completed, email this Capstone Proposal as a Word
						document to the Capstone Projects Coordinator, at the
						Department of Computer Science and Software Electrical
						Engineering, Swinburne University
					</strong>
					<br />
					<br />
					<label>
						<input
							type="checkbox"
							checked={this.state.agreeToTerms}
							onChange={(event) =>
								this.setState({
									agreeToTerms: event.target.checked,
								})
							}
						/>{" "}
						<strong>I AGREE</strong>
					</label>
					<br />
					<div className="col-sm-12 col-md-2 p-0">
						<Button
							variant="danger"
							className="w-100 proceed-btn"
							onClick={this.proceed}
						>
							<strong>PROCEED &#62;&#62;</strong>
						</Button>
					</div>
					<br />
					<br />
				</div>
			</div>
		);
	};
	// * End of selectedDashboard()

	// ? End of Rendering Methods

	//

	// ? Non-Rendering Methods

	// * Method to proceed to next page
	proceed = () => {
		if (this.state.agreeToTerms) {
			localStorage.setItem("agreeToTerms", true);
			window.location = "/organisationDetails";
		} else {
			window.alert("Please agree to the Terms to continue");
		}
	};
	// * End of proceed()

	// ? End of Non-Rendering Methods

	//

	// ? Lifecycle methods
	componentDidMount = () => {
		console.log("COMPONENT MOUNTING");
		if (localStorage.getItem("agreeToTerms") !== null) {
			console.log("the lc::", localStorage.getItem("agreeToTerms"));
			this.setState({
				agreeToTerms: localStorage.getItem("agreeToTerms"),
			});
		}
	};
	// ? End of Lifecycle methods

	render() {
		return (
			<>
				<ProfileHeader />

				<div className="begin-application-page">
					{this.BeginApplicationHeader()}
					{this.beginApplicationContent()}
				</div>
			</>
		);
	}
}
