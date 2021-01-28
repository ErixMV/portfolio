import "./projects.sass"

import { Project } from "./Project";

const dataProjects = [
    {
        title: "WeaThere",
        desc: "React with APIs.",
        img: "weathere.png",
        github: "https://github.com/ErixMV/WeaThere",
        web: "https://weathere-app.herokuapp.com"
    },
    {
        title: "The Black Swan",
        desc: "Python and React.",
        img: "blackswan.png",
        github: "https://github.com/ErixMV/BlackSwan",
        web: "https://theblackswan.herokuapp.com"
    },
    {
        title: "Thoth API",
        desc: "Express API",
        img: "thoth.jpg",
        github: "https://github.com/CodersSA/API-Thoth",
    }
]

const renderProjects = ({ title, desc, img, web = "/", github }, i) => {
    return (
        <Project title={title} desc={desc} img={img} key={i} i={i + 1} web={web} github={github} />
    )
}

export const Projects = () => {

    return (
        <section id="projects">
            <div className="projects-container">
                {dataProjects.map(renderProjects)}
            </div>
        </section>
    )
}