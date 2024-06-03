import React from 'react';
import './index.css';
import computerImage from './assets/computer.png'; 

function LandingPage() {
    return (
        <>
        <div className="main">
            <div id="text-div">
                <h1>WELCOME TO <br /> MCIC <br /> COMPUTER <br /> CENTER</h1>
                <p style={{ display: 'inline' }}>
                    ~by <span style={{ textDecoration: 'underline' }}>Pankaj Singh Sir</span>
                </p>
            </div>
            <div id="img-div">
                <img src={computerImage} alt="icon" />
            </div>
        </div>
       
        </>
    );
}

export default LandingPage;
