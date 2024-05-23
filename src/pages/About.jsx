import React from 'react'
import Header from './Header'
import Footer from './Footer'
import "./About.css"

function About() {
  return (
    <>
      <div className="container">
        <div className="main-outer">
          <div className="images">
            <h1>About Us</h1>
          </div>
          <div className="content">
            <div className="titleblog"><h2>Who We Are</h2></div>
            <div className="blogcontent">
              <p>Welcome to Study With Us, where creativity meets technology.At CodeMastery, we are passionate about all things programming. Our mission is to provide high-quality, practical, and engaging content to help both novice and experienced developers enhance their coding skills and stay updated with the latest industry trends. We are a team of seasoned software engineers, developers, and tech enthusiasts who have come together to share our knowledge and expertise. With years of experience across various domains and technologies, we bring diverse perspectives and deep technical insights to our readers.</p>
              <h2>What We Offer</h2>
              <p>
                <ol>
                  <li>In-Depth Tutorials: Step-by-step guides on various programming languages, frameworks, and tools. Whether you're just starting out or looking to master a new technology, our tutorials are designed to help you learn effectively.</li>
                  <li>Industry News: Stay informed about the latest trends, updates, and breakthroughs in the tech world. We cover a wide range of topics from AI and machine learning to cybersecurity and cloud computing.</li>
                  <li>Expert Tips & Tricks: Get insider tips, best practices, and hacks to improve your coding efficiency and productivity. Our experts share their personal experiences and professional advice to help you code smarter.</li>
                  <li>Community & Support: Join a community of like-minded individuals who share your passion for coding. Engage in discussions, seek advice, and share your projects with fellow developers.</li>
                </ol>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default About