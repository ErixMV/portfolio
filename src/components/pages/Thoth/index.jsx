import "./thoth.sass"

import { ReactComponent as ExpressIcon } from "../../../assets/express.svg"
import {ReactComponent as TypeScriptIcon } from "../../../assets/typescript.svg"
import {ReactComponent as MongoIcon } from "../../../assets/mongo.svg"
import {ReactComponent as PassportIcon } from "../../../assets/passport.svg"
import { GitHub } from '@material-ui/icons';

export const ThothApi = ({ title = "Thoth API" }) => {
    return (
        <div id="thoth">
            <div className="project-page">
                <div className="project-page__title">
                    <h2>{title}</h2>
                </div>
                <div className="caption" style={{ textAlign: "center", padding: "30px 0px" }}>
                    <img src="/static/thoth-logo.svg" style={{ height: "300px", padding: "2rem" }} alt="" />
                    <div style={{ padding: "20px 0px 0px" }}>
                        <a className="link" href="https://github.com/CodersSA/API-Thoth" target="_BLANK" rel="noreferrer"><GitHub /></a>
                    </div>
                </div>
                <div className="project-page__desc">
                    <div className="project-page__desc__left">
                        <div className="desc-title">
                            <h3>Summary</h3>
                        </div>
                        <div className="summary">
                            <p style={{ padding: "20px 0px 50px" }}>
                                Main Express API for all projects from the organization.
                            </p>
                            <p>
                                This server gets requests from all the web apps of Coders. 
                            </p>
                            <p>
                            It has an authorization system, cookie control, password encryption and database management depending on the project that makes the request. 
                            </p>
                            <p>
                            Thoth API has been developed for <a target="_BLANK" rel="noreferrer" style={{ fontSize: "inherit", textDecoration: "underline" }} href="https://github.com/CodersSA">Coders</a>
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
                                    TypeScript
                                </div>
                                <div className="svg-container">
                                    <TypeScriptIcon />
                                </div>
                            </div>
                            <div className="tech-group">
                                <div>
                                    MongoDB
                                </div>
                                <div className="svg-container">
                                    <MongoIcon />
                                </div>
                            </div>
                            <div className="tech-group">
                                <div>
                                    Passport
                                </div>
                                <div className="svg-container">
                                    <PassportIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}