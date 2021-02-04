import "./contact.sass"
import { MailOutline } from '@material-ui/icons';
export const Contact = () => {
    return (
        <div id="contact" className="section">
            <div className="section-title">
                Get in touch
            </div>
            <div className="section-desc">
                I'm currently looking for new opportunities on Web Development, Front-End Development and Back-End Development.
                If you want to discuss a project, an opportunity or just say hi, my inbox will always be available!
            </div>
            <div className="links">
                <button><MailOutline /></button>
            </div>
        </div>
    )
}