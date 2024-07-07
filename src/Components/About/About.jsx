import React from 'react'
import styles from '../About/About.module.css'
import { getImageUrl } from '../../utils'
const About = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl('About/about-3.png')} alt="About" className={styles.aboutImg} />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('About/image 2.png')} alt="Image 2" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis velit quia, impedit totam veniam minima?</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('About/image 3.png')} alt="Image 2" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis velit quia, impedit totam veniam minima?</p>
                        </div>
                    </li>


                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('About/image 4.png')} alt="Image 2" />
                        <div className={styles.aboutItemText}>
                            <h3>Ui Developer</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis velit quia, impedit totam veniam minima?</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About