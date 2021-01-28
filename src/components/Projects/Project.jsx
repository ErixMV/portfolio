import { GitHub, Language, AddCircleOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import "aos/dist/aos.css";

import { useEffect } from 'react';
import AOS from "aos";

export const Project = ({ title, desc, img, i, github, web }) => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, [])

    return (
        <figure className="project" data-folio={i} data-link="WheThere" data-aos="fade-up" >
            <img src={`/static/${img}`} alt="1" />
            <figcaption className="project__caption">
                <div className="project-title">
                    {title}
                </div>
                <div className="project-desc">
                    <div className="project-tec">
                        {desc}
                    </div>
                    <div className="project-buttons">
                        <a href={github} target="_BLANK" rel="noreferrer"><GitHub /></a>
                        <a href={web} target="_BLANK" rel="noreferrer"><Language /></a>
                        <Link to="/weathere"><AddCircleOutline /></Link>
                    </div>
                </div>
            </figcaption>
        </figure>
    )
}