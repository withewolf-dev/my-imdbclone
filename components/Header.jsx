import React from 'react'
import {Link} from 'react-scroll'

export default function Header() {
    return (
        <>
        <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
          <li><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
          <li><Link  to="about" spy={true} smooth={true}>About</Link></li>
          <li><Link  to="contact" spy={true} smooth={true}>Contact</Link></li>
          <li><Link  to="service" spy={true} smooth={true}>Service</Link></li>
            </ul>
            </>
    )
}
