import React from 'react';
import { Form } from "react-bootstrap";
import contactImg from '../Assets/images/cq5dam.web.1280.720.jpg'
import contactBGI from '../Assets/images/concrete_seamless.gif'
import { Header } from '../Components/header';
import { Footer } from '../Components/footer';

export const Contact = (props) => {
    return(
        <div>
            <Header/>
        <div>
        <div className="row">
            <img className="w-100 h-100" src={contactImg}  alt=""/>
            <div className="capstone-content m-5 p-3"style={{position: 'absolute',background:'#343642'}}>
                <div className="col-12 p-lg-3 p-md-3 p-sm-2">
                    <strong><h1>CONTACT US</h1></strong>
                </div>
            </div>
        </div>
         <div className="row">
         <img className="w-100" src={contactBGI} style={{height:'1142px'}} alt=""/>
         <div className="container m-5" style={{position: 'absolute', background: 'white'}}>
         <Form.Group className="col-lg-12 col-md-12 col-sm-12 pt-3">
            <Form.Label> <h2>Email us </h2></Form.Label>
        </Form.Group>
         <Form.Group className="col-lg-12 col-md-12 col-sm-12">
            <Form.Label> Are you a international student? </Form.Label>
        </Form.Group>
         <Form.Group className="col-lg-12 col-md-12 col-sm-12">
                <Form.Check
                    inline
                    type="radio"
                    label="No"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                    />
                <Form.Check
                    inline
                    type="radio"
                    label="Yes"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                />
            </Form.Group>
            <Form.Group className="col-lg-12 col-md-12 col-sm-12">
                <Form.Label className="">First Name </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="First Name"
                />
            </Form.Group>
            <Form.Group className="col-lg-12 col-md-12 col-sm-12">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Last name"
                />
            </Form.Group>
            <Form.Group className="col-lg-12 col-md-12 col-sm-12">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Email Address"
                />
            </Form.Group>
            <Form.Group className="col-lg-12 col-md-12 col-sm-12">
                <Form.Label>Mobile Number</Form.Label>
                <div className="row pl-3">
                <Form.Control as="select" className="col-4">
                    <option>+61(Australia)</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
                <Form.Control
                    className="col-6"
                    type="text"
                    placeholder="MobileNumber"
                />
                </div>
            </Form.Group>
            <Form.Group className="col-lg-12 col-md-12 col-sm-12">
                <Form.Label>Which best describes you ?</Form.Label>
                <Form.Control as="select">
                    <option>select an option</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
               
            </Form.Group>
            <Form.Group className="col-lg-12 col-md-12 col-sm-12">
                <Form.Label>What is your highest qualification ?</Form.Label>
                <Form.Control as="select" >
                    <option>select an option</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Form.Group>
            <Form.Group className="col-lg-12 col-md-12 col-sm-12">
                <Form.Label>Area of interest</Form.Label>
                
                <Form.Control as="select" >
                    <option>select an option</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Form.Group>
            <Form.Group className="col-lg-12 col-md-12 col-sm-12">
                <Form.Label>Intended course</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Last name"
                />
            </Form.Group>
            <Form.Group className="col-lg-12 col-md-12 col-sm-12">
                <Form.Label>Enquiry</Form.Label>
                <Form.Control
                     as="textarea" rows={3}
                />
            </Form.Group>
            <div className="p-2">
                <button style={{background: 'red', color: 'white'}}>submit</button>
            </div>
         </div>
        </div>
     </div>
     <div>
         <Footer/>
     </div>
     </div>
    )
}