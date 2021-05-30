import React, { useState } from 'react';
import { Form } from "react-bootstrap";
import college from '../Assets/images/swinburne_university.jpg';
import { Header } from './header';



export const Login = (props) =>{
    const [errorMsg, setErrorMsg] = useState(undefined);


    const authenticate = () => {
      let username = document.getElementById('username').value;
      let password = document.getElementById('password').value;

      if (username && password  ) {
          if (errorMsg) {setErrorMsg(undefined)};
            fetch('http://localhost:4000/users/authenticate',{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify({  username, password })
            }).then(res => {
                if(res.status === 200) {
                    username = '';
                    password = ''; 
                    alert('login successful');
                    window.location="/dashboard"
                }else{
                    setErrorMsg('incorrect username or password');
                }
            }).catch((err) => {
                setErrorMsg('authentication failed');
            }).finally(() => {
                document.getElementById('username').value = '';
                document.getElementById('password').value = '';
            })
      } else {
        setErrorMsg('please fill the blank messages');
      }
    }
  
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
                {errorMsg && <div className="pl-3">
                    <p style={{color: 'red'}}>{errorMsg}</p>
                </div>}
                <Form.Group className="col-sm-12 col-md-6 col-lg-6">
                    <Form.Label style={{fontSize: '12px' }}>Username</Form.Label>
                    <Form.Control
                        type="text"
                        className="input-border"
                        id="username"
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
                <div className="pl-3">
                        <p>Forgot password</p>
                </div>
                <div className="pl-3">
                    <button className="login-btn" onClick={() => authenticate()} style={{ backgroundColor: 'black', color: 'white'}}> LOGIN </button>
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