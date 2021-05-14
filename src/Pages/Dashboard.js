import React, { Component } from "react";

import "../Assets/Styling/Dashboard.css";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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

    // * Default Dashboard - Dashboard when there is atleast one applcation
    defaultDashboard = () => {
        return (
            <div className="default-dashboard row">
                {this.dashboardSelector()}
                {this.selectedDashboard()}
            </div>
        );
    };

    // * Render the dashboard selector
    dashboardSelector = () => {
        return (
            <div className="col-2">
                <div className="col-sm-6 col-md-12 col-lg-12">
                    Submitted Applications
                </div>
                <div className="col-sm-6 col-md-12 col-lg-12">New Proposal</div>
            </div>
        );
    };

    // * Render the Selected Dashboard elements
    selectedDashboard = () => {
        return <div className="col-10">Dashboard Section</div>;
    };

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
