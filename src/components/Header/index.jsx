import "./header.sass"

// import { Button } from './../common/Button/index';
import { Logotype } from "../common/Logotype";
import { ButtonUnderline } from './../common/ButtonUnderline/index';
import "./scrollEffect"

export const Header = () => {

    return (
        <div id="header">
            <div className="header__inner">
                <div className="scroll-op">
                    <Logotype className="active-scroll" />
                </div>
                <div className="large-menu">
                    <ul>
                        <li><ButtonUnderline to="/#projects" text="Projects" /></li>
                        <li><ButtonUnderline to="/#about" text="About me" /></li>
                        <li><ButtonUnderline to="/#contact" text="Contact" /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}