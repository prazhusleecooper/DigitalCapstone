import React from 'react';
import logo from '../Assets/images/swinburne.png'
import indengenousack from '../Assets/images/indigenous-acknowledgement.svg'
export const Footer = () =>{
    return (
        <div>
        <div className="row" style={{height:'400px'}}>
        <div  style={{backgroundColor:'yellow', height:'100%', width: '100%'}}>
           <div className="pt-5 pt-sm-3 col-12 d-flex justify-content-center">
               <strong><h1> Do you want to take your project to new frontier ? </h1></strong>
            </div>
            <div className="pt-3 pt-sm-3" >
            <div className="d-flex justify-content-center">
               <p  style={{fontSize:'25px'}}>Research with the faculty of science, Engineering and Technology,</p>
            </div>
            <div className="d-flex justify-content-center" >
                <p  style={{fontSize:'25px'}}> Computer Science and Software Engineering, is not scientifically</p> 
            </div>
            <div className="d-flex justify-content-center">
                <p  style={{fontSize:'25px'}}>advanced but also industrially relevant, providing practical solutions to</p>
            </div>
            <div className="d-flex justify-content-center">
                <p  style={{fontSize:'25px'}}> modern enterprises .</p>
            </div>
            </div>

            <div className="d-flex justify-content-center">
                <button style={{background: 'red', height: '40px'}}> APPLY NOW</button>
            </div>
        </div>
        </div>

        <div className="row" style={{height:'350px'}} >
        <div className="w-100" style={{ backgroundColor:'#343642', height:'100%' }}>
        <div className="row">
            <div className="col-3 p-5"> 
                <img src={logo} alt="" style={{height:'50px'}}/>
            </div>
            <div className="col-3 pt-5 pl-5 d-flex justifiy-content-end">
            <div style={{color: 'whitesmoke'}}  > 
                <div >
                    <h4>Quick Links</h4>
                </div>
                <div className="d-flex justify-content-center">
                    <p>Home</p>
                </div>
                <div className="d-flex justify-content-center">
                    <p>About</p>
                </div>
                <div className="d-flex justify-content-center">
                    <p>Contact </p>
                </div>
            </div>
            </div>
            <div  className="pt-5 pr-5 col-3 d-flex justifiy-content-start">
                <div style={{color: 'whitesmoke'}}> 
                    <div className="d-flex justify-content-center" >
                        <h4>Account</h4>
                    </div>
                    <div className="d-flex justify-content-center">
                        <p>login</p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <p>Register</p>
                    </div>
                </div>
            </div>
            <div className="col-3 pt-5">
                <div style={{color: 'whitesmoke'}} className="d-flex justify-content-center">
                    <div>
                    <p className="d-flex justify-content-center">Subscribe to newsletter</p>
                    <input style={{width: '200px'}} placeholder="Email"/>
                    </div>
                </div>
            </div>
            </div>
            <div className="row w-100">
            <div className="col-3 pt-5">
                <div style={{color: 'whitesmoke'}} className="d-flex justify-content-center">
                     <div>
                        <strong><p>Connect with Swinburne </p> </strong>
                    </div>
                </div>
            </div>
            <div className="col-3 pt-5">
                <div style={{color: 'whitesmoke'}} className="d-flex justify-content-end">
                     <div>
                        <p style={{ marginBottom: '-15px' }}>indigenous Acknowledgement</p>
                        <hr style={{ borderTop: '1px solid white', color: 'whitesmoke', }}></hr>
                        <img src={indengenousack} alt=""/>
                    </div>
                </div>
            </div>
            <div className="col-6 pt-5">
                <div style={{color: 'whitesmoke'}} className="d-flex justify-content-start">
                     <div>
                        <p style={{ marginBottom: '-5px' }}>We Respectfully acknowledege the Wurundjeri People, and their and present indigenous Acknowledgement</p>
                        <p style={{ marginBottom: '-5px' }}> who are the traditional owner of the land on which Swinburne's australian campuses melbournes's </p>
                        <p>east and other east. <a style={{ color: 'whitesmoke'}} href="/"> Full indigenous matter policy </a> </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}