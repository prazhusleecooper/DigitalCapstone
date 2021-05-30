import React, { Component } from "react";

import logo from "../Assets/Images/swinburne.png";
import "../Assets/Styling/ProfileHeader.css";

export default class ProfileHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showDropDown: false,
		};
	}

	toggleDropdown = () => {
		this.setState({
			showDropDown: !this.state.showDropDown,
		});
	};

	renderDropdown = () => {
		if (this.state.showDropDown) {
			return (
				<div className="dropdown-content">
					<a href="/dashboard">Dashboard</a>
					<a href="/profile">Profile</a>
					{/* <a href="/help">Help</a> */}
					<a href="/">Logout</a>
				</div>
			);
		}
	};

	render() {
		return (
			<div className="profile-header row col-12 mx-0">
				<div className="logo-section col-6 pl-4 m-0 d-flex flex-row align-items-end">
					<img style={{ height: "60px" }} src={logo} alt=""></img>
				</div>
				<div className="icon-section col-6 d-flex flex-row justify-content-end align-items-center">
					<div className="dropdown" onClick={this.toggleDropdown}>
						<button className="dropbtn">
							<img
								src="https://oliver-andersen.se/wp-content/uploads/2018/03/cropped-Profile-Picture-Round-Color.png"
								alt="Logo"
								width="50px"
								style={{ margin: "0 auto" }}
							/>
						</button>
						{this.renderDropdown()}
					</div>
				</div>
			</div>
		);
	}
}
