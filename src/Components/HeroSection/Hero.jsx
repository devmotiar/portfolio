import React from 'react'
import styles from '../HeroSection/Hero.module.css'
import { getImageUrl } from '../../utils'
const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi I'm Motiar</h1>
                <p className={styles.description}>I have been a Frontend Developer for over 2+ years and currently work for Dhaartri Naturals Pvt. Ltd.
                    I am an immediate joiner with skills in React.js, Next.js, Redux, Webpack, Babel, ESLint, Jest, Axios,
                    JavaScript, TypeScript, HTML, CSS, Bootstrap, Tailwind CSS, Scrum/Agile, GitHub, GitLab, Bitbucket,
                    jQuery, SASS, and Firebase. I have worked with both web-based, multi-threaded applications as well
                    as front-end development using the latest web technologies. I specialize in developing customer
                    service-oriented applications with solid test automation strategies. In addition to my coding
                    skills, I am proficient in conducting technical analysis and assisting clients in project
                    management.
                </p>
                <a href="mailto:rahamangs465@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            {/* <img src={getImageUrl('Hero/avatar.png')} alt="Hero" className={styles.heroImg} /> */}

            <div className={styles.heroSec}>
                <img src={getImageUrl('Hero/img-1.png')} alt="Hero" className={styles.heroImg} />
            </div>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}

export default Hero