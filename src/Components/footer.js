import React from 'react';
import logo from '../Assets/images/swinburne.png';
import indengenousack from '../Assets/images/indigenous-acknowledgement.svg';
import faceBook from '../Assets/images/fb.svg';
import instagram from '../Assets/images/instagram.svg';
import twitter from '../Assets/images/twitter.svg';

export const Footer = () =>{
    return (
        <div>
        <div className="d-none d-lg-block d-md-none d-sm-none">
        <div className="row" style={{height:'310px'}}>
        <div  style={{backgroundColor:'yellow', height:'100%', width: '100%'}}>
           <div className="pt-5 pt-sm-3 col-12 d-flex justify-content-center">
               <strong><h1> Do you want to take your project to new frontier ? </h1></strong>
            </div>
            <div className="pt-3 pt-sm-3" >
            <div className="d-flex justify-content-center">
               <p  style={{fontSize:'20px',marginBottom: '0px'}}>Research with the faculty of science, Engineering and Technology,</p>
            </div>
            <div className="d-flex justify-content-center" >
                <p  style={{fontSize:'20px', marginBottom: '0px'}}> Computer Science and Software Engineering, is not scientifically</p> 
            </div>
            <div className="d-flex justify-content-center">
                <p  style={{fontSize:'20px',marginBottom: '0px'}}>advanced but also industrially relevant, providing practical solutions to</p>
            </div>
            <div className="d-flex justify-content-center">
                <p  style={{fontSize:'20px'}}> modern enterprises .</p>
            </div>
            </div>

            <div className="d-flex justify-content-center">
               <a href="/login"> <button style={{background: 'red', height: '40px', border:'0px', fontWeight:'bold', color: 'white'}}> APPLY NOW</button></a>
            </div>
        </div>
        </div>

        <div className="row" style={{height:'350px'}} >
        <div className="w-100" style={{ backgroundColor:'#343642', height:'100%' }}>
        <div className="row">
            <div className="col-lg-3 p-5"> 
                <div className="p-5">
                    <img src={logo} alt="" style={{height:'50px'}}/>
                </div>
            </div>
            <div className="col-3 pt-5 pl-5 d-flex justifiy-content-end">
            <div style={{color: 'whitesmoke'}}  > 
                <div >
                    <h4>Quick Links</h4>
                </div>
                <div className="d-flex justify-content-center">
                    <a href="/home" style={{color:'whitesmoke'}}><p>Home</p></a>
                </div>
                <div className="d-flex justify-content-center">
                    <a href="/about" style={{color:'whitesmoke'}}><p>About</p></a>
                </div>
                <div className="d-flex justify-content-center">
                    <a href="/contact" style={{color:'whitesmoke'}}><p>Contact </p></a>
                </div>
            </div>
            </div>
            <div  className="pt-5 pr-5 col-3 d-flex justifiy-content-start">
                <div style={{color: 'whitesmoke'}}> 
                    <div className="d-flex justify-content-center" >
                        <h4>Account</h4>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a href="/login" style={{color:'whitesmoke'}}><p>login</p></a>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a href="/register" style={{color:'whitesmoke'}}><p>Register</p></a>
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
            <div className="col-3">
                <div style={{color: 'whitesmoke'}} className="d-flex justify-content-center">
                     <div>
                        <strong><p style={{marginBottom:'2px'}}>Connect with Swinburne </p> </strong>
                        <div className="row d-flex justify-content-center">

                            <div className="pr-2"><img style={{height: '25px', filter: 'invert(1)'}} src={faceBook} alt=""></img></div>
                            <div className="pr-2"><img style={{height: '25px', filter: 'invert(1)'}} src={instagram} alt=""></img></div>
                            <div ><img style={{height: '25px', filter: 'invert(1)'}} src={twitter} alt=""></img></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div style={{color: 'whitesmoke'}} className="d-flex justify-content-end">
                     <div>
                        <p style={{ marginBottom: '-15px' }}>indigenous Acknowledgement</p>
                        <hr style={{ borderTop: '1px solid white', color: 'whitesmoke', marginBottom: '0px' }}></hr>
                        <img src={indengenousack} alt=""/>
                    </div>
                </div>
            </div>
            <div className="col-6 ">
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
        {/*for medium devices */}
        <div className="d-none d-md-block d-lg-none">
        <div className="row" style={{height:'210px'}}>
        <div  style={{backgroundColor:'yellow', height:'100%', width: '100%'}}>
           <div className="pt-5 pt-sm-3 col-12 d-flex justify-content-center">
               <strong><h4> Do you want to take your project to new frontier ? </h4></strong>
            </div>
            <div className="pt-3 pt-sm-3" >
            <div className="d-flex justify-content-center">
               <p style={{marginBottom: '0px'}}>Research with the faculty of science, Engineering and Technology,</p>
            </div>
            <div className="d-flex justify-content-center" >
                <p  style={{marginBottom: '0px'}}> Computer Science and Software Engineering, is not scientifically</p> 
            </div>
            <div className="d-flex justify-content-center">
                <p  style={{marginBottom: '0px'}}>advanced but also industrially relevant, providing practical solutions to</p>
            </div>
            <div className="d-flex justify-content-center">
                <p> modern enterprises .</p>
            </div>
            </div>

            <div className="d-flex justify-content-center">
            <a href="/login"> <button style={{background: 'red', height: '40px', border:'0px', fontWeight:'bold', color: 'white'}}> APPLY NOW</button></a>
            </div>
        </div>
        </div>

        <div className="row" style={{height:'350px'}} >
        <div className="w-md-100" style={{ backgroundColor:'#343642', height:'100%' }}>
        <div className="row">
            <div className="col-md-3 p-5"> 
                <img src={logo} alt="" style={{height:'50px'}}/>
            </div>
            <div className="col-md-3 pt-5 pl-sm-5 d-flex justifiy-content-end">
            <div style={{color: 'whitesmoke'}}  > 
                <div >
                    <h4>Quick Links</h4>
                </div>
                <div className="d-flex justify-content-center">
                    <a href="/home" style={{color:'whitesmoke'}}><p>Home</p></a>
                </div>
                <div className="d-flex justify-content-center">
                    <a href="/about" style={{color:'whitesmoke'}}><p>About</p></a>
                </div>
                <div className="d-flex justify-content-center">
                    <a href="/contact" style={{color:'whitesmoke'}}><p>Contact </p></a>
                </div>
            </div>
            </div>
            <div  className="pt-5 pr-5 col-md-3 d-flex justifiy-content-start">
                <div style={{color: 'whitesmoke'}}> 
                    <div className="d-flex justify-content-center" >
                        <h4>Account</h4>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a href="/login" style={{color:'whitesmoke'}}><p>login</p></a>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a href="/register" style={{color:'whitesmoke'}}><p>Register</p></a>
                    </div>
                </div>
            </div>
            <div className="col-md-3 pt-5">
                <div style={{color: 'whitesmoke'}} className="d-flex justify-content-start">
                    <div>
                    <p className="d-flex justify-content-md-center">Subscribe to newsletter</p>
                    <input style={{width: '150px'}} placeholder="Email"/>
                    </div>
                </div>
            </div>
            </div>
            <div className="row w-100">
            <div className="col-md-3 pt-5">
                <div style={{color: 'whitesmoke'}} className="d-flex justify-content-end">
                     <div>
                        <strong><p>Connect with Swinburne </p> </strong>
                        <div className="row d-flex justify-content-center">

                            <div className="pr-2"><img style={{height: '25px', filter: 'invert(1)'}} src={faceBook} alt=""></img></div>
                            <div className="pr-2"><img style={{height: '25px', filter: 'invert(1)'}} src={instagram} alt=""></img></div>
                            <div ><img style={{height: '25px', filter: 'invert(1)'}} src={twitter} alt=""></img></div>
                        </div>
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
        {/*for small devices */}
        <div className="d-sm-block d-md-none">
        <div className="row" style={{height:'310px'}}>
        <div  style={{backgroundColor:'yellow', height:'100%', width: '100%'}}>
           <div className="pt-5 pt-sm-3 col-12 d-flex justify-content-center">
               <strong><p> Do you want to take your project to new frontier ? </p></strong>
            </div>
            <div className="pt-3 pt-sm-3 col-12">
            <div className="d-flex justify-content-center">
               <p style={{marginBottom:'0px'}}>Research with the faculty of science,</p>
            </div>
            <div className="d-flex justify-content-center">
               <p style={{marginBottom:'0px'}}>Engineering and Technology,</p>
            </div>
            <div className="d-flex justify-content-center">
                <p  style={{marginBottom:'0px'}}> Computer Science and Software Engineering </p> 
            </div>
            <div className="d-flex justify-content-center">
                <p  style={{marginBottom:'0px'}}> is not scientifically advanced but also industrially</p> 
            </div>
            <div className="d-flex justify-content-center">
                <p  style={{marginBottom:'0px'}}>relevant, providing practical solutions to</p>
            </div>
            <div className="d-flex justify-content-center">
                <p  style={{}}> modern enterprises .</p>
            </div>
            </div>

            <div className="d-flex justify-content-center">
            <a href="/login"> <button style={{background: 'red', height: '40px', border:'0px', fontWeight:'bold', color: 'white'}}> APPLY NOW</button></a>
            </div>
        </div>
        </div>
        <div className="row" style={{height:'900px'}} >
        <div className="w-sm-100" style={{ backgroundColor:'#343642', height:'100%' }}>
        <div>
            <div className="col-12 pt-5 d-flex justify-content-center"> 
                <img src={logo} alt="" style={{height:'50px'}}/>
            </div>
            <div className="col-12 pt-5">
            <div style={{color: 'whitesmoke'}}  > 
                <div className="d-flex justify-content-center" >
                    <h4>Quick Links</h4>
                </div>
                <div className="d-flex justify-content-center">
                    <a href="/home" style={{color:'whitesmoke'}}><p>Home</p></a>
                </div>
                <div className="d-flex justify-content-center">
                    <a href="/about" style={{color:'whitesmoke'}}><p>About</p></a>
                </div>
                <div className="d-flex justify-content-center">
                    <a href="/contact" style={{color:'whitesmoke'}}><p>Contact </p></a>
                </div>
            </div>
            </div>
            <div  className="col-12 pt-5">
                <div style={{color: 'whitesmoke'}}> 
                    <div className="d-flex justify-content-center" >
                        <h4>Account</h4>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a href="/login" style={{color:'whitesmoke'}}><p>login</p></a>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a href="/register" style={{color:'whitesmoke'}}><p>Register</p></a>
                    </div>
                </div>
            </div>
            <div className="col-12 pt-5">
                <div style={{color: 'whitesmoke'}} className="d-flex justify-content-center">
                    <div>
                    <p className="d-flex justify-content-center">Subscribe to newsletter</p>
                    <input style={{width: '200px'}} placeholder="Email"/>
                    </div>
                </div>
            </div>
            </div>
            <div className="row w-100">
            <div className="col-12 pt-5">
                <div style={{color: 'whitesmoke'}} className="d-flex justify-content-center">
                     <div>
                        <strong><p>Connect with Swinburne </p> </strong>
                        <div className="row d-flex justify-content-center">

                            <div className="pr-2"><img style={{height: '25px', filter: 'invert(1)'}} src={faceBook} alt=""></img></div>
                            <div className="pr-2"><img style={{height: '25px', filter: 'invert(1)'}} src={instagram} alt=""></img></div>
                            <div ><img style={{height: '25px', filter: 'invert(1)'}} src={twitter} alt=""></img></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 pt-5">
                <div style={{color: 'whitesmoke'}} className="d-flex justify-content-center">
                     <div>
                        <p style={{ marginBottom: '-15px' }}>indigenous Acknowledgement</p>
                        <hr style={{ borderTop: '1px solid white', color: 'whitesmoke', }}></hr>
                        <img src={indengenousack} alt=""/>
                    </div>
                </div>
            </div>
            <div className="col-12 pt-5">
                <div className="d-flex justify-content-end" style={{color: 'whitesmoke'}}>
                     <div>
                        <p style={{ marginBottom: '-5px' }}>We Respectfully acknowledge the Wurundjeri People,</p>
                        <p style={{ marginBottom: '-5px' }}>and their present indigenous Acknowledgement</p>
                        <p style={{ marginBottom: '-5px' }}> who are the traditional owner of the land on which </p>
                        <p style={{ marginBottom: '-5px' }}>Swinburne's australian campuses melbournes's </p>
                        <p>east and other east. <a style={{ color: 'whitesmoke'}} href="/"> Full indigenous matter policy </a> </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}