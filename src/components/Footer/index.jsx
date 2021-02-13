import "./footer.sass"

// import { GitHub, LinkedIn, MailOutline } from '@material-ui/icons';

export const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-inner">
                <div className="footer-credits">
                    <p>© 2021 Erix Mamani Villacresis. All rights reserved.</p>
                </div>
                {/* <div className="footer-icons">
                    <a href="https://github.com/ErixMV" target="_BLANK" rel="noreferrer"><GitHub /></a>
                    <a href="https://www.linkedin.com/in/erixmamani/" target="_BLANK" rel="noreferrer"><LinkedIn /></a>
                    <a href="mailto:erixmv022@gmail.com"><MailOutline /></a>
                </div> */}
            </div>
        </footer>
    )
}