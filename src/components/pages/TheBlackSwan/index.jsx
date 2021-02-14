import "./theblackswan.sass"

import { useEffect } from "react"
import { ReactComponent as ReactIcon } from "../../../assets/react.svg"
import { ReactComponent as ExpressIcon } from "../../../assets/express.svg"
import { ReactComponent as SassIcon } from "../../../assets/sass.svg"
import { ReactComponent as PythonIcon } from "../../../assets/python.svg"
import { ReactComponent as MaterialIcon } from "../../../assets/material.svg"
import { GitHub, Language } from '@material-ui/icons';

export const TheBlackSwan = ({ title = "The Black Swan" }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div id="theblackswan">
            <div className="project-page">
                <div className="project-page__title">
                    <h2>{title}</h2>
                </div>
                <div className="caption" style={{ textAlign: "center", padding: "30px 0px" }}>
                    <div style={{ width: "600px", height: "400px", overflow: "hidden", margin: "auto" }}>
                        <img style={{ position: "relative", left: "-22%" }} src="/static/blackswan.png" alt="" />
                    </div>
                    <div style={{ padding: "20px 0px 0px" }}>
                        <a className="link" href="https://github.com/ErixMV/BlackSwan" target="_BLANK" rel="noreferrer"><GitHub /></a>
                        <a className="link" href="https://theblackswan.herokuapp.com" target="_BLANK" rel="noreferrer"><Language /></a>
                    </div>
                </div>
                <div className="project-page__desc">
                    <div className="project-page__desc__left">
                        <div className="desc-title">
                            <h3>Summary</h3>
                        </div>
                        <div className="summary">
                            <p style={{ padding: "20px 0px 30px" }}>
                                A book recomendation system.
                            </p>
                            <p>
                                The Black Swan is a web application that allows you to search
                                for books according to your preferences by using prediction algorithms.
                            </p>
                            <p>
                                Thanks to this project I started working with algorithms, datasets and libraries for data management and analysis: Numpy, Scipy, Pandas and Scikit among others.
                            </p>
                            <p>
                                The Black Swan has been developed by <a target="_BLANK" rel="noreferrer" style={{ fontSize: "inherit", textDecoration: "underline" }} href="https://github.com/codia-sl">Codia</a>
                            </p>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="project-page__desc__right">
                        <div className="desc-title tecnologies">
                            <h3>Tecnologies</h3>
                        </div>
                        <div className="tech-icons">
                            <div className="tech-group">
                                <div>
                                    ExpressJS
                                </div>
                                <div className="svg-container">
                                    <ExpressIcon style={{ fill: "white" }} />
                                </div>
                            </div>
                            <div className="tech-group">
                                <div>
                                    React
                                </div>
                                <div className="svg-container">
                                    <ReactIcon />
                                </div>
                            </div>
                            <div className="tech-group">
                                <div>
                                    Python
                                </div>
                                <div className="svg-container">
                                    <PythonIcon />
                                </div>
                            </div>
                            <div className="tech-group">
                                <div>
                                    SASS/SCSS
                                </div>
                                <div className="svg-container">
                                    <SassIcon />
                                </div>
                            </div>
                            <div className="tech-group">
                                <div>
                                    Material-UI
                                </div>
                                <div className="svg-container">
                                    <MaterialIcon />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}