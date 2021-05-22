import React, { Component } from "react";

import "../Assets/Styling/About.css";
import heroImage from "../Assets/Images/tumblr_oyeuw3wMAL1qa0rheo1_1280-ConvertImage.jpg";

export default class About extends Component {
	render() {
		return (
			<div style={{ height: "100vh" }}>
				<div
					className="hero-image-div col-12 d-flex flex-row align-items-center"
					style={{ backgroundImage: `url(${heroImage})` }}
				>
					<div className="about-text-section col-sm-10 col-md-5 py-5 px-3 px-md-5 my-5 mx-md-5">
						<h3>About Swineburne</h3>
						Swinburne is an innovative education institution. We
						provide quality, careeroriented education to students.
						Innovative research centres and strong international
						partnerships complement our strong technological base
						and links with industry.
						<br />
						We are committed to delivering excellence in higher
						education, vocational training and research. To achieve
						this and to meet the challenges of the future, we are
						focused on:
						<br />
						<br />
						<b>High-impact research</b>
						<br />
						Through breakthrough research we will utilise and
						develop science and technology to solve problems and
						capture opportunities that will transform our society
						and improve our nation’s prosperity and wellbeing.
						<br />
						<br />
						<b>Delivering industry outcomes</b>
						<br />
						We are a collaborative hub, connected and respected in
						the global research community and engaged in powerful
						and productive partnerships with business, government
						and the community.
						<br />
						<br />
						<b>Our students</b>
						<br />
						Our world-class programs will teach and inspire those
						who will be tomorrow’s leaders in a diverse range of
						industries, facilitating individual careers, business
						and national competitiveness.
						<br />
					</div>
				</div>

				<div className="project-subjects-section col-12 py-5">
					<div className="project-subjects-title-section col-12 px-0 px-md-4 ">
						<h1 className="title">
							<strong>Capstone Project Subjects</strong>
						</h1>
						FSET - Computer Science and Software Engineering
					</div>

					<div className="project-subjects-section row col-12 my-2">
						<div className="col-sm-12 col-md-6 px-0 px-md-5 my-3">
							<div className="dept-title mt-2">
								<span className="dept-title-text py-1 px-2">
									Network Design & Security Projects
								</span>
							</div>

							<div className="subject-desc-section my-2">
								<div className="projects-offered-text mb-1">
									<em>
										Projects offered over one semester twice
										a year:
									</em>
								</div>
								<b>Applied Research Project</b>
								<br />
								Postgraduate students only
							</div>
						</div>

						<div className="col-sm-12 col-md-6 px-0 px-md-5 my-3	">
							<div className="dept-title mt-2">
								<span className="dept-title-text py-1 px-2">
									Computer Science & Software Engineering
									Projects
								</span>
							</div>

							<div className="subject-desc-section my-2">
								<div className="projects-offered-text mb-1">
									<em>
										Projects offered over one semester twice
										a year:
									</em>
								</div>
								<b>Applied Research Project</b>
								<br />
								Postgraduate students only
								<div className="projects-offered-text mt-3">
									<em>
										Projects offered over two semesters:
									</em>
								</div>
								<b>Software Engineering/Development Project</b>
								<br />
								Undergraduate students only
							</div>
						</div>

						<div className="d-flex flex-row align-items-center justify-content-center w-100 my-2">
							<svg
								width={130}
								height={80}
								viewBox="0 0 785 283"
								fill="none"
							>
								<rect
									x={73.9634}
									y={76.8468}
									width={33.7047}
									height={207.621}
									transform="rotate(20.6704 73.9634 76.8468)"
									fill="#C4C4C4"
								/>
								<rect
									x={148.766}
									width={33.7047}
									height={207.621}
									transform="rotate(21.6614 148.766 0)"
									fill="#C4C4C4"
								/>
								<rect
									x={72.1288}
									y={76.8468}
									width={33.7047}
									height={128.078}
									fill="#C4C4C4"
								/>
								<rect
									x={375.958}
									y={76.8468}
									width={33.7047}
									height={207.621}
									transform="rotate(20.6704 375.958 76.8468)"
									fill="#C4C4C4"
								/>
								<rect
									x={450.76}
									width={33.7047}
									height={207.621}
									transform="rotate(21.6614 450.76 0)"
									fill="#C4C4C4"
								/>
								<rect
									x={374.123}
									y={76.8468}
									width={33.7047}
									height={128.078}
									fill="#C4C4C4"
								/>
								<rect
									x={677.952}
									y={76.8468}
									width={33.7047}
									height={207.621}
									transform="rotate(20.6704 677.952 76.8468)"
									fill="#C4C4C4"
								/>
								<rect
									x={752.755}
									width={33.7047}
									height={207.621}
									transform="rotate(21.6614 752.755 0)"
									fill="#C4C4C4"
								/>
								<rect
									x={676.117}
									y={76.8468}
									width={33.7047}
									height={128.078}
									fill="#C4C4C4"
								/>
							</svg>
						</div>

						<div className="process-section my-3 px-0 px-md-4">
							<h1 className="blue-text">
								<b>PROCESS</b>
							</h1>
							Once a project is selected by a subject convenor,
							organisation will be contaced directed by a team of
							students who have been assigned to work with ytou on
							your Capstone project to iunvestigate the problems
							you have outlined. THe students will arrange an
							interview with you to discuss your project and
							together you will discuss what you hope to achieve
							over the project period.
							<hr className="my-4" style={{ width: "40%" }} />
							<h3>
								<b>Student Team Expections</b>
							</h3>
							We expect our student teams to work closely with you
							over the course of the project treating all
							information provided with strict confedentiality and
							communicate with you in a timely and professional
							manner. Students will be working part time on
							projects and may need to schedule meetings and
							discussions around other academic study and work
							commitments.
							<br />
							<ul>
								<li>
									The outcome of the projects will vary and it
									is important to note we cannot guarantee the
									completion of all projects. However, under
									the close supervision of a Swineburne
									academic, we expect student teams to provide
									a substantial work effort towards completing
									the project satisfactorily within the time
									frame available
								</li>
							</ul>
							<hr className="my-4" style={{ width: "40%" }} />
							<h3>
								<b>Costs</b>
							</h3>
							There are no costs for hosting a student project.
							However, if students need access to particular
							software or hardware for your project, outside of
							what is generally available to students via our
							labs, you will need to supply licenses and
							equipment.
							<hr className="my-4" style={{ width: "40%" }} />
							<h3>
								<b>Meetings</b>
							</h3>
							Each project is unique, therefore how many meetings,
							when and where they occur, can be decide when you
							meet your student team for the first time. As a rule
							it is useful to hold at least the first meeting at
							your premises with any key users of your product for
							students to familiarise themeselves with your
							organisation and the technology problem they will be
							investigating.
							<hr className="my-4" style={{ width: "40%" }} />
							<h3>
								<b>Project Aims</b>
							</h3>
							We aim to give students experience working on
							real-world technology project with a tangible
							outcome, such as a requirements document or
							development of a prototype for an individual or
							business. Students should gain skills in project
							management and professional communication, and
							develop a deeper understanding of the benefits and
							difficulties of working in a team situation, which
							we hope better equips them for successful employment
							on graduation and for their future careers.
							<hr className="my-4" style={{ width: "40%" }} />
							<h3>
								<b>
									Student Assessment & Project Host Feedback
								</b>
							</h3>
							Students are enrolled into a unit of study and will
							be individually graded for their contribution on
							your project. We welcome your comments and feedback
							on your student tem and will invite you to submit
							feedback throught the project. Also, we request for
							confirmation that the students have completed a
							handover of their project to you (please see under
							Handover of Projects what this involves).
						</div>
					</div>
				</div>
			</div>
		);
	}
}
