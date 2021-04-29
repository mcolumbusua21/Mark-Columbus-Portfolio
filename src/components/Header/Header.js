import React from 'react'
import './Header.css'
import profilePic from '../../assets/images/profile_pic.jpeg'

function Header() {
    return (
        <header>
            <nav >
                <ul className='specs'>
                    <a href="#about-me">About Me</a>
                    <a href="#contact-me">Contact Me</a>
                    <a href="#work">Work</a>
                    <a href="#linkedin">LinkedIn</a>
                </ul>
            </nav>

            <div className="circle-img-1">
                <img className='circular' src={profilePic} />
                <div className="my_name">Mark Columbus</div>
            </div>
            
        </header>
    )
}

export default Header

