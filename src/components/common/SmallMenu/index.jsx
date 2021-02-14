import "./bm-burger.sass"

import { slide as Menu } from 'react-burger-menu'

export const SmallMenu = () => {

    return (
        <Menu disableAutoFocus right>
            <a id="home" className="menu-item" href="/#banner">Home</a>
            <a id="Projects" className="menu-item" href="/#e-projects">Projects</a>
            <a id="About" className="menu-item" href="/#e-about">About</a>
            <a id="contact" className="menu-item" href="/#e-contact">Contact</a>
        </Menu>
    )
}