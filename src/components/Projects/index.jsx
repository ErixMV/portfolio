import "./projects.sass"

import { Project } from "./Project";
const dataProjects = [
    {
        title: "WeaThere",
        url: "weathere",
        desc: "React with APIs.",
        img: "weathere.png",
        github: "https://github.com/ErixMV/WeaThere",
        web: "https://weathere-app.herokuapp.com"
    },
    {
        title: "The Black Swan",
        url: "the-black-swan",
        desc: "Python and React.",
        img: "blackswan.png",
        github: "https://github.com/ErixMV/BlackSwan",
        web: "https://theblackswan.herokuapp.com"
    },
    {
        title: "Thoth API",
        url: "thoth-api",
        desc: "Express API",
        svg: "thoth-logo.svg",
        github: "https://github.com/CodersSA/API-Thoth",
        web: ""
    },
    {
        title: "Codia",
        url: "codia",
        desc: "Codia Home Page",
        svg: "wip.svg",
        github: "https://github.com/codia-sl/codia-front",
        web: ""
    },
    {
        title: "Perseo",
        url: "perseo",
        desc: "Online shop",
        svg: "wip.svg",
        github: "https://github.com/CodersSA/Perseo-Back",
        web: ""
    },
    {
        title: "JBG",
        url: "jbg",
        desc: "App for PYMES",
        svg: "wip.svg",
        github: "https://github.com/CodersSA/jbg",
        web: ""
    },

]

const renderProjects = ({ title, desc, url, img, svg, web = "/", github }, i) => {
    return (
        <Project title={title} desc={desc} url={url} svg={svg} img={img} key={i} i={i + 1} web={web} github={github} />
    )
}

export const Projects = () => {

    return (
        <section id="e-projects">
            <div className="projects-container">
                {dataProjects.map(renderProjects)}
            </div>
        </section>
    )
}