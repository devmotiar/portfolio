import React from 'react'
// import { getImageUrl } from '../../utils'
import styles from '../Contact/Contact.module.css'
import { FaGithub, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiHeroku } from "react-icons/si";
const Contact = () => {
    return (
        <footer className={styles.container} id='contact'>
            <div className={styles.content}>
                <div className={styles.sourceLinks}>
                    <h2>Source Links</h2>
                    <ul className={styles.sourceLink}>
                        <li className={styles.link}>
                            <a href="https://github.com/rahaman96" className={styles.githubIcon}> <FaGithub /></a>
                        </li>
                        <li className={styles.link}>
                            <a href="https://vercel.com/motiar-rahamans-projects" className={styles.vercelIcon}> <IoLogoVercel /></a>

                        </li>
                        <li className={styles.link}>
                            <a href="" className={styles.herokuIcon}> <SiHeroku /></a>
                        </li>

                    </ul>
                </div>
                <div className={styles.quickLink}>
                    <h2>Quick Links</h2>
                    <ul className={styles.quickLink}>

                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Experience</a>
                        </li>
                        <li>
                            <a href="">Projects</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.contact}>
                    <h2>Contact Me</h2>
                    {/* <p>Feel Free to Reach Out!</p> */}
                    <p>rahamangs465@gmail.com</p>
                    <p>+91 9749477620</p>
                    <p>+91 9800060113</p>

                </div>
                <div>
                    <div className={styles.socialLinks}>
                        <h2>Social Links</h2>
                        <ul className={styles.sourceLink}>
                            <li className={styles.link}>

                                <a href="https://github.com/rahaman96" className={styles.facebookIcon}> <FaFacebookF /></a>


                            </li>
                            <li className={styles.link}>

                                <a href="https://vercel.com/motiar-rahamans-projects" className={styles.instagramIcon}> <FaInstagram /></a>
                            </li>
                            <li className={styles.link}>
                                <a href="" className={styles.linkedinIcon}> <FaLinkedinIn /></a>
                            </li>
                            <li className={styles.link}>

                                <a href="" className={styles.twitterIcon}> <FaTwitter /></a>
                            </li>
                            <li className={styles.link}>
                                <a href="https://web.whatsapp.com/" className={styles.whatsappIcon}>
                                    <FaWhatsapp />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Contact