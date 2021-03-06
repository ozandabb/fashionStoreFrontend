/*  eslint-disable */
import React, { Component } from 'react';

import './common.css'
//import navbar
import MainNavbar from '../../components/MainNavbar';
// import footer
import Footer from '../../components/Footer';
import newimg from '../../asserts/Images/newnew.png'
class ContactUS extends Component {
    constructor() {
        super();
       
        this.state = {

        };



    }

  



    render() {
        return (
            <div className="wrapper">
                                <MainNavbar></MainNavbar>
            <div className="container">
                <div className="row mt-2">
                    <div className="col-md-6  Cn_PA">
                        <div className="col-md-12" >
                            <h3 style={{textAlign:'left'}}>Contact Us</h3>
                        </div>
                        <form >
                            <div className="form-row ml-2">
                                <div className="form-group col-md-6">
                                    <label for="inputEmail4">First Name *</label>
                                    <input type="text" className="form-control" id="inputEmail4" placeholder="First Name..." required />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputEmail4">Last Name *</label>
                                    <input type="text" className="form-control" id="inputEmail4" placeholder="Last Name ..." required />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputEmail4">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email..." required />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputPassword4">Country *</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="Country..." required />
                                </div>
                            </div>
                            <div className="form-group ml-2">
                                <label for="inputAddress">Subject *</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="Sybject..." required />
                            </div>
                            <div className="form-group ml-2">
                                <label for="inputAddress2">Message *</label>
                                <input type="text" className="form-control" id="inputAddress2" placeholder="Your Message..." required />
                            </div>
                            <button type="submit" className="btn btn-success ml-2" >Submit</button>
                        </form>
                    </div>
                    <div className="col-md-6 mt-2">
                       
                        <div className="row ml-1 mb-4 pb-2" >
                        <div className="col-md-9 mt-2 ">
                                {/* <img src={newimg} className="img-fluid" /> */}
                                <img src="images/logo.png" className="img-fluid mt-4 mb-4" />
                            </div>
                            <div className="col-md-12" >
                            <h5>Social Networks</h5>
                        </div>

                            <div className="col-md-3 mt-2 mr-2 ">
                                <a  className={""}  style={{color:'black'}} href="https://www.facebook.com/lucidexsolutions/" target="_blank">
                                    <i className="fa fa-facebook mr-1 p-1"></i><span>Facebook</span>
                                </a>
                            </div>
                            <div className="col-md-3 mt-2 mr-2 ">
                                <a  className={""}  style={{color:'black'}} href="https://www.linkedin.com/company/31043839/" target="_blank">
                                    <i className="fa fa-linkedin mr-1 p-1"></i><span>Linkedin</span>
                                </a>
                            </div>
                            <div className="col-md-3 mt-2 mr-2 ">
                                <a  className={""}  style={{color:'black'}} href="https://www.instagram.com/lucidex_solutions/" target="_blank">
                                    <i className="fa fa-instagram mr-1 p-1m"></i><span>Instagram</span>
                                </a>
                            </div>
                            <div className="col-md-3 mt-2 mr-2 ">
                                <a  className={""} style={{color:'black'}}  href="https://twitter.com/lucidex_" target="_blank">
                                    <i className="fa fa-twitter mr-1 p-1" ></i><span>Twitter</span>
                                </a>
                            </div>
                            <div className="col-md-6 mt-2 ">
                                <a  className={""}  style={{color:'black'}} href="mailto:inhowrelax@gmail.com" >
                                    <i className="fa fa-envelope mr-1 p-1" ></i><span>Email : info@fahi.com</span>
                                </a>
                            </div>
                           
                        </div>
                    </div>

                </div>

            </div>
              {/* // ======================================================== */}
                {/* // =============== Footer =============== */}
                {/* // ========================================================  */}
                <Footer></Footer>


            </div>
        );
    }
}


export default ContactUS;

