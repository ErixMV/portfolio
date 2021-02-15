import "./bm-burger.sass"
import { useState } from "react"

import { slide as Menu } from 'react-burger-menu'

export const SmallMenu = () => {

    const [open, isOpen] = useState(false);

    const openHandler = () => {
        isOpen(false)
    }

    const openMenu = () => {
        isOpen(true)
    }

    return (
        <Menu disableAutoFocus right onOpen={openMenu} onClose={openHandler} isOpen={open}>
            <a onClick={openHandler} id="home" className="menu-item" href="/#banner">Home</a>
            <a onClick={openHandler} id="Projects" className="menu-item" href="/#e-projects">Projects</a>
            <a onClick={openHandler} id="About" className="menu-item" href="/#e-about">About</a>
            <a onClick={openHandler} id="contact" className="menu-item" href="/#e-contact">Contact</a>
        </Menu>
    )
}