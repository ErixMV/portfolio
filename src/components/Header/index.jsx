import "./header.sass"

import { Button } from './../common/Button/index';
import { Logotype } from "../common/Logotype";
export const Header = () => {
    return (
        <div id="header">
            <div className="header__inner">
                <div>
                    <Logotype />
                </div>
                <div className="large-menu">
                    <ul>
                        <li><Button to="#footer" text="Projects" /></li>
                        <li><Button to="/" text="Cosa 2" /></li>
                        <li><Button to="/" text="Cosa 3" /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}