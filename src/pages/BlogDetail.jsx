import React from 'react'
import "./BlogDetail.css"
import Header from './Header'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'
import { blog } from '../Data/Blog'

function BlogDetail() {
  let uselocation = useLocation();
  console.log(uselocation)
  let currentid = uselocation.pathname.split('/')[2]
  let currentdata = blog.filter((v) => v.id == currentid)[0]
  console.log(currentdata)
  console.log(currentid)
  return (
    <>
      <Header />
      <div className="container">
        <div className="main-outer">
          <div className="images">
            <img src={currentdata.img} alt="" />
          </div>
          <div className="content">
            <div className="titleblog"><h1>{currentdata.title}</h1></div>
            <div className="blogcontent">
              <p>{currentdata.body}</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default BlogDetail