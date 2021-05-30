import React from 'react';
import homeBGI from '../Assets/images/Swinburne-University-Advanced-Technology-Centre-5.jpg'
import { Footer } from '../Components/footer';
import { Header } from '../Components/header';
export const Home = (props) => {
    return(
        <div>
            <div>
                <Header/>
            </div>
        <div className="row">
            <img  className="w-100" style={{height: '700px'}} src={homeBGI} alt="" />
                <div className="capstone-content m-5 p-3"style={{position: 'absolute',background:'#343642'}}>
                <div className="col-12 p-lg-3 p-md-3 p-sm-2">
                    <h1>CAPSTONE PROJECTS</h1>
                </div>
                <div className="col-12 p-lg-3 p-md-3 p-sm-2">
                    <h3>Be Ready for the future, now.</h3>
                </div>
                <div className="col-12 p-lg-3 p-md-3 p-sm-2">
                    <p> Capstone Project includes variety of projects
                        <br/>each offering students a professional
                        <br/>development learning oppurtunity.</p>
                </div>
                <div className="col-12 p-lg-3 p-md-3 p-sm-2">
                    <a href="/about"><button style={{background: 'white', color: 'black'}}> Learn more --> </button></a>
                </div>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
        </div>

    )
}