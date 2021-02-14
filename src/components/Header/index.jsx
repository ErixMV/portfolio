import "./header.sass"

// import { Button } from './../common/Button/index';
import { Logotype } from "../common/Logotype";
import { ButtonUnderline } from './../common/ButtonUnderline/index';
import "./scrollEffect"
import Media from "react-media"
import { SmallMenu } from './../common/SmallMenu';

export const Header = () => {

    return (
        <div id="header">
            <div className="header__inner">
                <div className="scroll-op">
                    <Logotype className="active-scroll" />
                </div>
                <div className="large-menu">
                    <Media query={{ maxWidth: 749 }}>
                        <SmallMenu />
                    </Media>
                    <Media query={{ minWidth: 750 }}>
                        <ul>
                            <li><ButtonUnderline to="/#e-projects" text="Projects" /></li>
                            <li><ButtonUnderline to="/#e-about" text="About me" /></li>
                            <li><ButtonUnderline to="/#e-contact" text="Contact" /></li>
                        </ul>
                    </Media>
                </div>
            </div>
        </div>
    )
}