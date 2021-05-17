import React from 'react';
import logo from '../Assets/images/swinburne.png'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export const Header = () =>{
    return (
        <div>
        <div className="d-none d-md-block d-lg-block">
        <div className="row" style={{backgroundColor:'#343642', height: '80px'}}>
            <div className="logo">
                <img style={{ height: '60px'}} src={logo} alt=""></img>
            </div> 
            <div className="d-flex justify-content-end" style={{width:'100%',height:'80px',  position: 'absolute'}}>
                <div className="d-flex align-items-center px-lg-5 px-md-2 px-sm-3" style={{background:'red', height:'100%' , top: '50%'}}> <a style={{fontSize: '20px', color: 'whitesmoke'}} href="/home"> Home </a></div>
                <div className="d-flex align-items-center px-lg-5 px-md-2 px-sm-3" style={{ height:'100%'}}> <a style={{fontSize: '20px', color: 'whitesmoke'}} href="/">About </a> </div>
                <div className="d-flex align-items-center px-lg-5 px-md-2 px-sm-3"> <a style={{fontSize: '20px', color: 'whitesmoke'}} href="/contact"> Contact </a> </div>
                <div className="d-flex align-items-center px-lg-5 px-md-2 px-sm-3"> <a style={{fontSize: '20px', color: 'whitesmoke'}} href="/login"> Login </a></div>
                <div className="d-flex align-items-center px-lg-5 px-md-2 px-sm-3"> <a style={{fontSize: '20px', color: 'whitesmoke'}} href="/register"> Register </a></div>
            </div>
        </div>
        </div>

    <div className="d-sm-block d-md-none" style={{height: '100px' , background: 'gray'}}>
    <Navbar variant="dark" bg="dark" expand="lg" className="w-100">
        <img className="logo"style={{ height: '80px'}} src={logo} alt=""></img>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  className="w-100 justify-content-end">
            <Nav.Link className="navLink" href="/home">Home</Nav.Link>
            <Nav.Link className="navLink" href="/">About</Nav.Link>
            <Nav.Link className="navLink" href="/contact">Contact</Nav.Link>
            <Nav.Link className="navLink" href="/login">Login</Nav.Link>
            <Nav.Link className="navLink" href="/register">Register</Nav.Link>
        </Navbar.Collapse>
    </Navbar>
    </div> 
    </div>
    )
}