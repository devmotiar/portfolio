import React, { useState } from 'react';
import '../Navbar/Navbar.css'
import { FaLinkedin, FaFacebookF, FaYoutube } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
    const [mobileToggle, setMobileToggle] = useState(false);
    return (
        <>
            <nav className='main-nav'>
                <div className="logo">
                    <h2>
                    <a href="#">
                    <span className=''>M</span>otiar
                    </a>
                      
                    </h2>
                </div>
                <div
                    className={mobileToggle ? 'menu-link mobile-menu-link' : 'menu-link'}>
                    <ul>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#experience">Experience</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className="social-media">
                    <ul className='social-media-desktop'>
                        <li>
                            <a href="https://www.linkedin.com/in/motiar-rahaman-b840b6233/"><FaLinkedin className='linkedin' /></a>
                        </li>

                        <li>
                            <a href="https://www.linkedin.com/in/motiar-rahaman-b840b6233/"><FaFacebookF className='facebook' /></a>

                        </li>

                        <li>
                            <a href="https://www.linkedin.com/in/motiar-rahaman-b840b6233/"><FaYoutube className='youtube' /></a>
                        </li>
                    </ul>
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setMobileToggle(!mobileToggle)}>
                            <GiHamburgerMenu />
                        </a>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar