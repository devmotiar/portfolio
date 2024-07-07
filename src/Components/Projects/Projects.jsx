import React from 'react'
import Slider from "react-slick";
import styles from '../Projects/Projects.module.css'
import projects from '../../data/projects.json'
import ProjectCard from './ProjectCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className={styles.container} id='projects' >
            <h2 className={styles.title}>Projects</h2>

            <div className={styles.projects}>
                <Slider {...settings}>
                    {projects.map((project, id) => {
                        return (
                            <ProjectCard key={id} project={project} />
                        )
                    })}
                </Slider>
            </div>
        </section>
    )
}

export default Projects