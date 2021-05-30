import React, { useEffect, useRef } from 'react';
import logo from '../Assets/images/swinburne.png'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export const Header = () =>{
    const activeId = useRef('home');

    useEffect(() => { 
      changeBackground(window.location.pathname.substring(1));
    });
    const changeBackground = (id = 'home') => {
        const elementId = !id ? 'home' : id;
        document.getElementById(activeId.current).style.backgroundColor = '#343642';
        document.getElementById(elementId).style.backgroundColor = 'red';
        activeId.current = elementId;
    }
    return (
    <div>
    <div className="d-none d-md-block d-lg-block">
    <div className="row" style={{backgroundColor:'#343642', height: '80px'}}>
        <div className="logo">
            <img style={{ height: '60px'}} src={logo} alt=""></img>
        </div> 
        <div className="d-flex justify-content-end" style={{width:'100%',height:'80px',  position: 'absolute'}}>
            <div className="d-flex align-items-center px-lg-5 px-md-2 px-sm-3" id='home' style={{height:'100%' , top: '50%'}}> <a  onClick={() => changeBackground('home')} style={{fontSize: '20px', color: 'whitesmoke'}} href="/home"> Home </a></div>
            <div className="d-flex align-items-center px-lg-5 px-md-2 px-sm-3" id='about' style={{height:'100%' , top: '50%'}} > <a onClick={() => changeBackground('about')} style={{fontSize: '20px', color: 'whitesmoke'}} href="/about">About </a> </div>
            <div className="d-flex align-items-center px-lg-5 px-md-2 px-sm-3" id='contact' style={{height:'100%' , top: '50%'}} > <a onClick={() => changeBackground('contact')}style={{fontSize: '20px', color: 'whitesmoke'}} href="/contact"> Contact </a> </div>
            <div className="d-flex align-items-center px-lg-5 px-md-2 px-sm-3" id='login' style={{height:'100%' , top: '50%'}} > <a onClick={() => changeBackground('login')} style={{fontSize: '20px', color: 'whitesmoke'}} href="/login"> Login </a></div>
            <div className="d-flex align-items-center px-lg-5 px-md-2 px-sm-3" id='register' style={{height:'100%' , top: '50%'}}> <a  onClick={() => changeBackground('register')} style={{fontSize: '20px', color: 'whitesmoke'}} href="/register"> Register </a></div>
        </div>
    </div>
    </div>

    <div className="d-sm-block d-md-none" style={{height: '100px' , background: 'gray'}} >
    <Navbar variant="dark" bg="dark" expand="lg" className="w-100">
        <img className="logo"style={{ height: '80px'}} src={logo} alt=""></img>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  className="w-100 justify-content-end" style={{zIndex: 2}}>
            <Nav.Link className="navLink" href="/home">Home</Nav.Link>
            <Nav.Link className="navLink" href="/about">About</Nav.Link>
            <Nav.Link className="navLink" href="/contact">Contact</Nav.Link>
            <Nav.Link className="navLink" href="/login">Login</Nav.Link>
            <Nav.Link className="navLink" href="/register">Register</Nav.Link>
        </Navbar.Collapse>
    </Navbar>
    </div> 
    </div>
    )
}