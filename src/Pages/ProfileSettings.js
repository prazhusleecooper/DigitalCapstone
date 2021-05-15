import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

import "../Assets/Styling/ProfileSettings.css";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            applications: [
                {
                    id: "abc123",
                    project: "Project ABC",
                    dateSubmitted: "21/05/2021",
                    supervisor: "Mike Sanders",
                    outcome: "APPROVED",
                },
                {
                    id: "xyz312",
                    project: "Project XYZ",
                    dateSubmitted: "21/04/2021",
                    supervisor: "Xavier Holmes",
                    outcome: "PENDING",
                },
            ],

            // ? Profile Information
            firstName: "John",
            lastName: "Doe",
            email: "John@xyz.com",
            mobile: "+61478349130",
            password: "TheSecretPassword",
            organization: "XYZABC",
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
    //
    // ? End of Non-Rendering Methods

    // ? Rendering Methods
    // * Render Profile Header
    profileHeader = () => {
        return (
            <div className="col-12 py-3">
                <div className="profile-settings-header col-sm-12 col-md-5 col-lg-4">
                    <h1>
                        <strong>Profile Settings</strong>
                    </h1>
                </div>
            </div>
        );
    };
    // * End of profileHeader()

    // * Render Profile Settings
    profileSettings = () => {
        return (
            <div className="profile-settings-section col-12  row mt-3 mt-md-4">
                <div className="profile-settings-inner col-sm-11 col-md-10 col-lg-10 p-md-3 p-lg-4 my-3">
                    <div className="profile-settings row pt-3 py-md-0">
                        <div className="profile-image-section col-sm-12 col-md-4 col-lg-4">
                            <div className="profile-image-inner">
                                <img
                                    src="https://oliver-andersen.se/wp-content/uploads/2018/03/cropped-Profile-Picture-Round-Color.png"
                                    alt="Logo"
                                    width="150vw"
                                    style={{ margin: "0 auto" }}
                                />
                                <svg
                                    width={31}
                                    height={29}
                                    viewBox="0 0 301 299"
                                    fill="none"
                                    className="edit-img-btn"
                                >
                                    <rect
                                        x={244.033}
                                        y={0.755219}
                                        width={80}
                                        height={267}
                                        transform="rotate(45.5 244.033 0.755219)"
                                        fill="black"
                                    />
                                    <path
                                        d="M43.8467 201.123L97.0032 258.126L21.0585 275.659L43.8467 201.123Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="profile-details-section col-sm-12 col-md-8 col-lg-8 row mt-3 mt-md-0">
                            <Form.Group className="col-sm-12 col-md-6 col-lg-6">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="First name"
                                    value={this.state.firstName}
                                    disabled
                                />
                            </Form.Group>

                            <Form.Group className="col-sm-12 col-md-6 col-lg-6">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Last name"
                                    value={this.state.lastName}
                                    disabled
                                />
                            </Form.Group>

                            <Form.Group className="col-sm-12 col-md-6 col-lg-6">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    name="email"
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="col-sm-12 col-md-6 col-lg-6">
                                <Form.Label>Mobile</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Mobile Number"
                                    value={this.state.mobile}
                                    name="mobile"
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="col-sm-12 col-md-6 col-lg-6">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    name="password"
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="col-sm-12 col-md-6 col-lg-6">
                                <Form.Label>Organization</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Organization"
                                    value={this.state.organization}
                                    name="organization"
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </Form.Group>

                            <div className="col-sm-0 col-md-6 col-lg-6" />

                            <div className="col-sm-0 col-md-6 col-lg-6">
                                <Button
                                    variant="danger"
                                    type="submit"
                                    className="w-100"
                                >
                                    Update Profile
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 row">
                        <div className="col-sm-12 col-md-4 col-lg-4 my-3">
                            <span className="delete-profile-btn ">
                                Delete Profile
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    // * End of profileSettings()

    // ? End of Rendering Methods

    render() {
        return (
            <div className="profile-settings-page">
                {this.profileHeader()}
                {this.profileSettings()}
            </div>
        );
    }
}
