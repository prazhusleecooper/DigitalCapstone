import React from 'react';
import logo from '../Assets/images/swinburne.png'

export const Header = () =>{
    return (
        <div className="row" style={{backgroundColor:'black', height: '100px'}}>
            <div className="logo">
                <img style={{ height: '80px'}} src={logo} alt=""></img>
            </div>
        </div>
    )
}