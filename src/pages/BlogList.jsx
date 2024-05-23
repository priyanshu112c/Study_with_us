import React from 'react'
import "./BlogList.css"
import { blog } from '../Data/Blog'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
function BlogList() {
  let blogdeta = blog.map((v, i) => {
    return (
      <div className="blogdiv" key={i}>
        <img src={v.img}  alt="erro" />
        <div className="title">
        <h1>{v.title}</h1>
        <button><a ><Link to={`/blogdetail/${v.id}`}>Explore</Link></a></button>
        </div>
      </div>
    )
  })
  return (
    <>
      <div className="container">
        <div className="mainer">
          <div className="headings">
            <h2><span>|</span>Latest Blog</h2>
          </div>
          <div className="list">
            {blogdeta}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default BlogList
