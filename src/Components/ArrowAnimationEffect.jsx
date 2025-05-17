import React from 'react'
import { Nav } from 'react-bootstrap';
import { FaArrowAltCircleRight } from "react-icons/fa";

//css
import '../Css/ArrowAnimationEffect.css'

function ArrowAnimationEffect({text = "Click Me", onClick, backgroundColor = "default"}) {
  return (
    <>
    <Nav.Link href='#' className="hover-fill-navLink" onClick={onClick}>
      <span className="label">{text}</span>
      <span className='arrow'><FaArrowAltCircleRight /></span>
    </Nav.Link>
      
    </>
  )
}

export default ArrowAnimationEffect
