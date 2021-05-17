import React, { Component } from "react";
import { Table } from "react-bootstrap";

import TickIcon from "../Components/TickIcon";

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
            return <TickIcon />;
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
