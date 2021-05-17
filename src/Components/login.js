import React from 'react';
import { Form } from "react-bootstrap";
import college from '../Assets/images/swinburne_university.jpg';
import { Header } from './header';



export const login = (props) =>{
  
    return(
        <div>
            <div>
                <Header/>
            </div>
        <div className="p-5">  
        <div className="container"  >
            <div className="row" style={{backgroundColor: 'white', height: '500px'}}>
            <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="d-flex align-items-center justify-content-center pb-5" style={{height: '100%'}}> 
            <div>
                <div className="pl-3">
                    <h4>Sign In</h4>
                </div>
                <Form.Group className="col-sm-12 col-md-6 col-lg-6">
                    <Form.Label style={{fontSize: '12px' }}>Username</Form.Label>
                    <Form.Control
                        type="text"
                        className="input-border"
                    />
                </Form.Group>
                <Form.Group className="col-sm-12 col-md-6 col-lg-6">
                    <Form.Label style={{fontSize: '12px' }}>Password</Form.Label>
                    <Form.Control
                        type="text"
                        className="input-border"
                    />
                </Form.Group>
                <div className="pl-3">
                        <p>Forgot password</p>
                </div>
                <div className="pl-3">
                    <button className="login-btn" style={{ backgroundColor: 'black', color: 'white'}}> LOGIN </button>
                </div>
            </div>
            </div>
            </div>
            <img src={ college } className="col-sm-12 col-md-6 col-lg-6 college" alt=""/>
            </div>
        </div>
        </div>
        </div>

    )
}