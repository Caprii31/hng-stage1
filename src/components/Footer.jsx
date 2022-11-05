import React from 'react'
import zuriLogo from '../images/Vector.png'
import logoII from '../images/I4G.png'
import dot from '../images/dot.png'

function Footer() {
  return (
    
    <footer className="footer">
        <img src={zuriLogo} alt="" id="zuri__logo" />
        <h3>Hng internship 9 frontend task</h3>
        <img src={logoII} alt="" />
        <img src={dot} alt="" className="dot" />
    </footer>
   
  )
}

export default Footer