import React from 'react';
import { ImageComponent } from './imageComponent';

export const login = (props) =>{
  
    return(
        <div className="container" >
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6"  style={{backgroundColor: 'gray'}}>
            <div className="d-flex justify-content-center"> 
            <div>
                <div className="pb-2">
                    <h4>Sign In</h4>
                </div>
                <div className="pb-2">
                    <div>
                        <p>Username</p>
                        <input className="input-border" id="email-id"/>
                    </div>
                </div>
                <div className="pb-2">
                        <span><p>password</p></span>
                        <input className="input-border" id="password"/>
                </div>
                <div className="pb-2">
                        <p>Forgot password</p>
                </div>
                <div className="pb-2">
                    <button className="login-btn" style={{ backgroundColor: 'black', color: 'white'}}> LOGIN </button>
                </div>
            </div>
            </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6" style={{width: '100%'}}>
                <ImageComponent/>
            </div>
            </div>
        </div>
    )
}