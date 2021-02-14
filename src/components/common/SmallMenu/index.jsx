import "./bm-burger.sass"

import { slide as Menu } from 'react-burger-menu'

export const SmallMenu = () => {
    const showSettings = (e) => {
        e.preventDefault();
    }

    return (
        <Menu right>
            <a id="home" className="menu-item" href="/#banner">Home</a>
            <a id="about" className="menu-item" href="/#e-projects">Projects</a>
            <a id="contact" className="menu-item" href="/#e-about">About</a>
            <a id="contact" className="menu-item" href="/#e-contact">Contact</a>
            <a onClick={showSettings} className="menu-item--small" href="/">Close Menu</a>
        </Menu>
    )
}