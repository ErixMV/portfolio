import "./banner.sass";
import { GitHub, LinkedIn, Person, ExpandMore } from '@material-ui/icons';

export const Banner = () => {
    return (
        <div id="banner">
            <div className="opacity">
                <div className="banner-content">
                    <div className="banner-data">
                        <img src="/static/erix.png" alt="profile" />
                        <div className="name">Erix Mamani Villacresis</div>
                        <div className="subtitle">Web Developer</div>
                        <div><GitHub /><LinkedIn /></div>
                    </div>
                    <div className="arrow-bottom"><ExpandMore /></div>
                </div>
            </div>
        </div>
    );
}