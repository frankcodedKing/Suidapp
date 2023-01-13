import React from 'react';
import Button from '@mui/material/Button';

const Navigation = () => {


  return (
    // <!-- Navigation-->
    <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        <div className="container px-4 px-lg-5">
            {/* <a className="navbar-brand" href="#page-top">SUI <span className="text-center mx-2"> Management</span></a> */}
            <a className="navbar-brand" href="#page-top">
            <img src="https://i.ibb.co/M9hDrKs/suilogo-removebg-preview.png" alt="logo" width="90" height="50" />

              </a>
            

            <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto my-2 my-lg-0">
                    <li className="nav-item"><a className="nav-link" href="#Withdrawals" style={{color: "#364150"}}>Transaction Log</a></li>
                  
                    <li className="nav-item"><a className="nav-link" href="#portfolio" style={{color: "#364150"}}>Portfolio</a></li>
                    <li className="nav-item"><a className="nav-link" href="#contact"> <Button variant="contained" className="btn-rounded" style={{backgroundColor: "#6fbcf0", borderRadius: "50px"}}>Connect</Button></a></li> 
                    

                     {/* <li className="nav-item">
                    
                        <div className="dropdown">
                            <a className="nav-link" href="page">
                            <div className="dropdown-content">
                              <a href="page">Total Portfolio Managed</a>
                              <a href="page">Cryptocurreny</a>
                              <a href="page">Stocks</a>
                              <a href="page">Real Estate</a>
                              <a href="page">Forex</a>
                              <a href="page">Cannabis</a>
                            </div>
                            </a>
                        </div> 
                    </li> */}

                    {/* <li className="nav-item"><a className="nav-link" href="#contact"> <button>Connect</button> </a></li>  */}
                </ul>
            </div>
        </div>
    </nav>
  
    );
  }
    

export default Navigation;