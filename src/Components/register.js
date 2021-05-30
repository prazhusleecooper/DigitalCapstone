import React, { useState } from 'react';
import { Form } from "react-bootstrap";
import college from '../Assets/images/swinburne_university.jpg';
import { Header } from './header';


export const Register = (props) =>{
   const [errorMsg, setErrorMsg] = useState(undefined);


    const register = () => {
      let username = document.getElementById('username').value;
      let emailId = document.getElementById('email-id').value;
      let password = document.getElementById('password').value;
      let confirmPassword = document.getElementById('confirmPassword').value;

      if (username && emailId && password &&  confirmPassword) {
        if (confirmPassword === password) {
            setErrorMsg(undefined);
            fetch('http://localhost:4000/users/register',{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify({  username, emailId, password }),
            }).then(res => {
                if(res.status === 200) {
                    // alert('registration successfull');
                    window.location="/login"
                } else if(res.status === 400) {
                    alert('username already exists');
                }
            }).catch((err) => {
                setErrorMsg('registration failed');
            }).finally(() => {
                document.getElementById('username').value = '';
                document.getElementById('email-id').value = '';
                document.getElementById('password').value = '';
                document.getElementById('confirmPassword').value = '';
            })
        }else{
            setErrorMsg('password and confirm password did not match');
        }
      }else{
          setErrorMsg('please fill the blank messages');
      }
    }
  
    return(
        <div>
        <div>
            <Header/>
        </div>
        <div className="p-5">  
        <div className="container">
            <div className="row" style={{backgroundColor: 'white', height: '500px'}}>
            <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="d-flex align-items-center justify-content-center pb-5" style={{height: '100%'}}> 
            <div>
                <div className="pl-3">
                    <h4>Create an account</h4>
                </div>
                {errorMsg && <div className="pl-3">
                    <p style={{color: 'red'}}>{errorMsg}</p>
                </div>}
                <Form.Group className="col-sm-12 col-md-6 col-lg-6">
                    <Form.Label style={{fontSize: '12px'}}>Username</Form.Label>
                    <Form.Control
                        type="text"
                        className="input-border"
                        id="username"
                    />
                </Form.Group>
                <Form.Group className="col-sm-12 col-md-6 col-lg-6">
                    <Form.Label style={{fontSize: '12px' }}>Email ID</Form.Label>
                    <Form.Control
                        type="text"
                        className="input-border"
                        id="email-id"
                    />
                </Form.Group>
                <Form.Group className="col-sm-12 col-md-6 col-lg-6">
                    <Form.Label style={{fontSize: '12px' }}>Password</Form.Label>
                    <Form.Control
                        type="password"
                        className="input-border"
                        id="password"
                    />
                </Form.Group>
                <Form.Group className="col-sm-12 col-md-6 col-lg-6">
                    <Form.Label style={{fontSize: '12px' }}>ConfirmPassword</Form.Label>
                    <Form.Control
                        type="password"
                        id="confirmPassword"
                        className="input-border"
                    />
                </Form.Group>
                <div className="pl-3">
                    <button className="login-btn" style={{ backgroundColor: 'black', color: 'white'}} onClick={() => register()}> REGISTER </button>
                </div>
            </div>
            </div>
            </div>
            <img src={ college } className="col-sm-12 col-md-6 col-lg-6 college" alt="" />
            </div>
        </div>
        </div>
        </div>
    )
}