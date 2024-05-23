import React from 'react'
import logo from "../Image/logo.png"
import "./Footer.css"

function Footer() {
  return (
    <>
    <div className="conatin">
        <div className="logo-intro">
            <img src={logo} alt="Error" />
            <div className="para">

            <p>Learn about Web accessibility, Web performance, and Database management.</p>
            </div>
        </div>
        <div className="links">
            <h3>Quick Link</h3>
            <li>Advertise with us</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </div>
        <div className="legal">
        <h3>Legal Stuff</h3>
            <li>Privacy Notice</li>
            <li>Cookie Policy</li>
            <li>Terms Of Use</li>
        </div>
    </div>
    </>
  )
}

export default Footer