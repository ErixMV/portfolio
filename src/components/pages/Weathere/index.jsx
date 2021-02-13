import "./weathere.sass"

import { ReactComponent as ReactIcon } from "../../../assets/react.svg"
import { ReactComponent as ExpressIcon } from "../../../assets/express.svg"
import { ReactComponent as AlgoliaIcon } from "../../../assets/algolia.svg"
import { ReactComponent as WeatherbitIcon } from "../../../assets/weatherbit.svg"
import { GitHub, Language } from '@material-ui/icons';

export const Weathere = ({ title = "Weathere" }) => {
    return (
        <div id="weathere">
            <div className="project-page">
                <div className="project-page__title">
                    <h2>{title}</h2>
                </div>
                <div className="caption" style={{ textAlign: "center", padding: "30px 0px" }}>
                    <img src="https://dummyimage.com/600x400/#ccc/ffffff" alt="" />
                    <div style={{ padding: "20px 0px 0px" }}>
                        <a className="link" href="https://github.com/ErixMV/WeaThere" target="_BLANK" rel="noreferrer"><GitHub /></a>
                        <a className="link" href="https://weathere-app.herokuapp.com" target="_BLANK" rel="noreferrer"><Language /></a>
                    </div>
                </div>
                <div className="project-page__desc">
                    <div className="project-page__desc__left">
                        <div className="desc-title">
                            <h3>Summary</h3>
                        </div>
                        <div className="summary">
                            <p style={{ padding: "20px 0px 50px" }}>
                                Weather forecast web application.
                            </p>
                            <p>
                                WeaThere allows you to check the weather forecast:
                            </p>
                            <ul>
                                <li>From almost any city around the world.</li>
                                <li>From your current position.</li>
                                <li>Of the next four days.</li>
                            </ul>
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
                                    Algolia Places API
                                </div>
                                <div className="svg-container">
                                    <AlgoliaIcon />
                                </div>
                            </div>
                            <div className="tech-group">
                                <div>
                                    Weatherbit API
                                </div>
                                <div className="svg-container">
                                    <WeatherbitIcon style={{ borderRadius: "15px" }} />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}