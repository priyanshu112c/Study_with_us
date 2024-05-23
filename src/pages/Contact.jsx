import React from 'react'
import "./Contact.css"
import Header from './Header'
import Footer from './Footer'

function Contact() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="contain">
          <div className="images">
            <h1>Contact</h1>
          </div>
          <div className="main">
            <form action="MAILTO:priyanshucha8279@gmail.com">
              <div class="form-group">
                <label for="exampleInputPassword1">User Name</label>
                <input type="Text" class="form-control" id="exampleInputPassword1" placeholder="Enter User name" />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Describe</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact