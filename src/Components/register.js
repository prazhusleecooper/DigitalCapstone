import React from 'react';
import { ImageComponent } from './imageComponent';

export const Register = (props) =>{
  
    return(
        <div className="container">
            <div className="row pt-5">
            <div className="pt-5 col-6 d-flex justify-content-center"> 
            <div>
                <div className="pb-2">
                    <h4>Create an account</h4>
                </div>
                <div className="pb-2">
                    <div>
                        <p>Email ID</p>
                        <input className="input-border" id="email-id"/>
                    </div>
                </div>
                <div className="pb-2">
                    <div>
                        <p>Username</p>
                        <input className="input-border" id="email-id"/>
                    </div>
                </div>
                <div className="pb-2">
                    <div>
                        <p>Password</p>
                        <input className="input-border" id="email-id"/>
                    </div>
                </div>
                <div className="pb-2">
                    <div>
                        <p>Confirm password</p>
                        <input className="input-border" id="email-id"/>
                    </div>
                </div>
                <div className="pb-2">
                    <button className="login-btn" style={{ backgroundColor: 'black', color: 'white'}}> REGISTER </button>
                </div>
            </div>
            </div>
            <div className="col-6">
                <ImageComponent/>
            </div>
            </div>
        </div>
    )
}