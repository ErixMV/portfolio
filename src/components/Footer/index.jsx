import "./footer.sass"

// import { GitHub, LinkedIn, MailOutline } from '@material-ui/icons';
import Media from 'react-media';

export const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-inner">
                <div className="footer-credits">
                    <p>© 2021 Erix Mamani Villacresis.</p>
                    <Media query={{ maxWidth: 749 }}>
                        <p> All rights reserved.</p>
                    </Media>
                    <Media query={{ minWidth: 750 }}>
                        <span> All rights reserved.</span>
                    </Media>
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