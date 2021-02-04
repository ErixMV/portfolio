import "./about.sass"
// import {ReactComponent as HtmlIcon } from "../../assets/html.svg"
import {ReactComponent as SassIcon } from "../../assets/sass.svg"
import {ReactComponent as ReactIcon } from "../../assets/react.svg"
import {ReactComponent as VueIcon } from "../../assets/vue.svg"
import {ReactComponent as NodeIcon } from "../../assets/node.svg"
import {ReactComponent as NextIcon } from "../../assets/next.svg"
import {ReactComponent as LaravelIcon } from "../../assets/laravel.svg"
import {ReactComponent as MongoIcon } from "../../assets/mongo.svg"
import {ReactComponent as MysqlIcon } from "../../assets/mysql.svg"
import {ReactComponent as PythonIcon } from "../../assets/python.svg"
import {ReactComponent as AspNetIcon } from "../../assets/aspnet.svg"
import {ReactComponent as JavaIcon } from "../../assets/java.svg"
import {ReactComponent as ExpressIcon } from "../../assets/express.svg"
import {ReactComponent as SpringIcon } from "../../assets/spring.svg"
import {ReactComponent as PhpIcon } from "../../assets/php.svg"
import {ReactComponent as JavaScriptIcon } from "../../assets/javascript.svg"
import {ReactComponent as BootstrapIcon } from "../../assets/bootstrap.svg"
import {ReactComponent as TypeScriptIcon } from "../../assets/typescript.svg"
import {ReactComponent as ReduxIcon } from "../../assets/redux.svg"
import {ReactComponent as JestIcon } from "../../assets/jest.svg"
import {ReactComponent as JQueryIcon } from "../../assets/jquery.svg"

export const About = () => {
    return (
        <div id="about" className="section">
            <div className="section-title">
                About me
            </div>
            <div className="desc">
                <p>My name is Erix. I'm a web developer based in Barcelona, Spain.</p>
                <p>
                    I am a self-taught person who loves to be constantly challenged to keep improving.
                    
                    My goal is to develop unique websites, apps or services, improve my programming skills 
                    and eventually develop my personal brand.
                </p>


            </div>
            <div className="technologies">
                <div className="tech">
                    <div className="tech-section">
                        <div className="tech-title">Programming languages</div>
                        <div className="tech-icons">
                            <PythonIcon/>
                            <PhpIcon/>
                            <JavaScriptIcon/>
                            <JavaIcon/>
                        </div>
                    </div>
                </div>
                <div className="tech">
                    <div className="tech-section">
                        <div className="tech-title">Frameworks I use</div>
                        <div className="tech-icons">
                            <ExpressIcon className="white"/>
                            <ReactIcon/>
                            <VueIcon/>
                            <NextIcon className="white"/>
                            <LaravelIcon/>
                            <AspNetIcon/>
                        </div>
                    </div>
                </div>
                <div className="tech">
                    <div className="tech-section">
                        <div className="tech-title">What I am learning now</div>
                        <div className="tech-icons">
                            <SpringIcon/>
                            <JestIcon/>
                        </div>
                    </div>
                </div>
                <div className="tech">
                    <div className="tech-section">
                        <div className="tech-title">Databases</div>
                        <div className="tech-icons">
                            <MongoIcon/>
                            <MysqlIcon/>
                        </div>
                    </div>
                </div>
                <div className="tech">
                    <div className="tech-section">
                        <div className="tech-title">Styles & Design</div>
                        <div className="tech-icons">
                            <SassIcon/>
                            <BootstrapIcon/>
                        </div>
                    </div>
                </div>
                <div className="tech">
                    <div className="tech-section">
                        <div className="tech-title">Others</div>
                        <div className="tech-icons">
                            <NodeIcon/>
                            <TypeScriptIcon/>
                            <ReduxIcon/>
                            <JQueryIcon/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}