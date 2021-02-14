import "./contact.sass"
import { LinkedIn, GitHub } from '@material-ui/icons';
import Media from "react-media";
export const Contact = () => {
    return (
        <div id="e-contact" className="section">
            <div className="section-title">
                Get in touch
            </div>
            <div className="section-body">
                <div className="section-desc">
                    I'm currently looking for new opportunities on Web Development, Front-End Development and Back-End Development.
                    If you want to discuss a project, an opportunity or just say hi, my inbox will always be available!
                
                    <div className="link-mail">
                        <div className="btn-under-effect">
                            <span className="noselect">
                                <Media query={{ maxWidth: 749 }}>
                                    <a href="mailto:erixmv022@gmail.com">Send message</a>
                                </Media>
                                <Media query={{ minWidth: 750 }}>
                                    <a href="mailto:erixmv022@gmail.com">erixmv022@gmail.com</a>
                                </Media>
                            </span>
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
                <div className="contact-links">
                    <div className="links">
                        <a href="https://www.linkedin.com/in/erixmamani/" target="_BLANK" rel="noreferrer"><LinkedIn /></a>
                        <a href="https://github.com/ErixMV" target="_BLANK" rel="noreferrer"><GitHub /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}