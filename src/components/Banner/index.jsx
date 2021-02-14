import "./banner.sass";
import { PlayArrowOutlined } from '@material-ui/icons';

export const Banner = () => {

    return (
        <div id="banner">
            <div className="opacity">
                <div className="banner-content">
                    <div className="banner-data">
                        <img src="/static/erix.png" alt="profile" />
                        <div className="name">Erix Mamani Villacresis</div>
                        <div className="subtitle">Web Developer</div>
                        <div className="primary-buttons">
                            <a target="_BLANK" href="/static/CV_Erix_2020.pdf"><button>Resume</button></a>
                            <a href="/#e-contact"><button>Contact</button></a>
                        </div>
                    </div>
                    <div className="arrow-bottom"><PlayArrowOutlined /></div>
                </div>
            </div>
        </div>
    );
}