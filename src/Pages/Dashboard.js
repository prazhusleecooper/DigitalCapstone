import React, { Component } from "react";
import { Table } from "react-bootstrap";

import "../Assets/Styling/Dashboard.css";

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
        };
    }

    // ? Rendering Methods
    // * Render Dashboard Header
    dashboardHeader = () => {
        return (
            <div className="col-12 py-3">
                <div className="dashboard-header col-sm-12 col-md-3 col-lg-3">
                    <h1>
                        <strong>DASHBOARD</strong>
                    </h1>
                </div>
            </div>
        );
    };
    // * End of dashboardHeader()

    // * Render Elements when there are no Applications found
    emptyDashboard = () => {
        return (
            <div className="col-12 my-sm-2 my-md-5 my-lg-5">
                <div className="no-applications-section col-sm-10 col-md-8 col-lg-8 align-middle">
                    <h1 className="my-5">
                        <em>No applications found</em>
                    </h1>

                    <div className="col-12 my-5 pt-5">
                        <button class="begin-btn py-4 col-sm-12 col-md-8 col-lg-6">
                            <h4>
                                <strong>Begin an Application</strong>
                            </h4>
                        </button>
                    </div>
                </div>
            </div>
        );
    };
    // * End of emptyDashboard()

    // * Default Dashboard - Dashboard when there is atleast one applcation
    defaultDashboard = () => {
        return (
            <div className="default-dashboard row mt-5">
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
                <div className="col-12 p-3 text-center submitted-applications-btn">
                    <span className="selector-text submitted-applications-text">
                        Submitted Applications
                    </span>
                </div>
                <div className="col-12 p-3 text-center new-proposal-btn">
                    <span className="selector-text new-proposal-text">
                        New Proposal
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
                <div className="selected-dashboard col-11 p-md-3 p-lg-4">
                    <Table
                        responsive
                        borderless
                        style={{ tableLayout: "auto" }}
                    >
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Project</th>
                                <th>Date Submitted</th>
                                <th>Supervisor</th>
                                <th>Application Outcome</th>
                            </tr>
                        </thead>
                        <tbody>{this.applicationsTable()}</tbody>
                    </Table>
                </div>
            </div>
        );
    };
    // * End of selectedDashboard()

    // * Rendering the Applications data-table
    applicationsTable = () => {
        return this.state.applications.map((application) => {
            return (
                <tr>
                    <td width="20%">{application.id}</td>
                    <td width="20%">{application.project}</td>
                    <td width="20%">{application.dateSubmitted}</td>
                    <td width="20%">{application.supervisor}</td>
                    <td className="d-flex flex-row align-items-center">
                        {this.renderIcon(application.outcome)}
                        {application.outcome}
                    </td>
                </tr>
            );
        });
    };
    // * End of applicationsTable()

    // * Render the Application outcome Icon
    renderIcon = (applicationOutcome) => {
        if (applicationOutcome === "PENDING") {
            return (
                <svg
                    width={22}
                    height={22}
                    viewBox="0 0 300 300"
                    fill="none"
                    className="mr-2"
                >
                    <circle cx={150} cy={150} r={150} fill="#FFD439" />
                    <rect x={92} y={78} width={47} height={144} fill="white" />
                    <rect x={162} y={78} width={47} height={144} fill="white" />
                </svg>
            );
        } else if (applicationOutcome === "APPROVED") {
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="3 3 16 16"
                    width="20"
                    className="mr-2"
                >
                    <defs>
                        <linearGradient
                            gradientUnits="userSpaceOnUse"
                            y2="-2.623"
                            x2="0"
                            y1="986.67"
                            id="0"
                        >
                            <stop stop-color="#ffce3b" />
                            <stop offset="1" stop-color="#ffd762" />
                        </linearGradient>
                        <linearGradient
                            y2="-2.623"
                            x2="0"
                            y1="986.67"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#ffce3b" />
                            <stop offset="1" stop-color="#fef4ab" />
                        </linearGradient>
                    </defs>
                    <g
                        transform="matrix(1.99997 0 0 1.99997-10.994-2071.68)"
                        fill="#da4453"
                    >
                        <rect
                            y="1037.36"
                            x="7"
                            height="8"
                            width="8"
                            fill="#32c671"
                            rx="4"
                        />
                        <path
                            d="m123.86 12.966l-11.08-11.08c-1.52-1.521-3.368-2.281-5.54-2.281-2.173 0-4.02.76-5.541 2.281l-53.45 53.53-23.953-24.04c-1.521-1.521-3.368-2.281-5.54-2.281-2.173 0-4.02.76-5.541 2.281l-11.08 11.08c-1.521 1.521-2.281 3.368-2.281 5.541 0 2.172.76 4.02 2.281 5.54l29.493 29.493 11.08 11.08c1.52 1.521 3.367 2.281 5.54 2.281 2.172 0 4.02-.761 5.54-2.281l11.08-11.08 58.986-58.986c1.52-1.521 2.281-3.368 2.281-5.541.0001-2.172-.761-4.02-2.281-5.54"
                            fill="#fff"
                            transform="matrix(.0436 0 0 .0436 8.177 1039.72)"
                            stroke="none"
                            stroke-width="9.512"
                        />
                    </g>
                </svg>
            );
        }
    };
    // * End of renderIcon()

    // ? End of Rendering Methods

    render() {
        return (
            <div className="dashboard-page">
                {this.dashboardHeader()}
                {/* {this.emptyDashboard()} */}
                {this.defaultDashboard()}
            </div>
        );
    }
}
