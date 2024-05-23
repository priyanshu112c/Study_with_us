import React from 'react'
import Header from './Header'
import image from "../Image/3236267.jpg"
import "./Home.css"
import BlogList from './BlogList'
import Footer from './Footer'
import BlogDetail from './BlogDetail'


function Home() {
  return (
    <>
    <Header/>
    <div className="container homeouterdiv">
        <div className="row">
            <div className="col-lg-6 text-center">
                <h2>Welcome to <span className='us'>StudyWith Us</span></h2>
            </div>
            <div className="col-lg-6 homeimg">
                <img src={image} alt="Error" />
            </div>
        </div>
    </div>
    <BlogList/>
    </>
  )
}

export default Home