import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import iconSun from '../assets/images/icon-sun.svg'
import imageAvatar from '../assets/images/image-avatar.jpg'

const Sidebar = () => {
    return (
        <aside className="sticky top-0 row-start-1 row-end-2 col-start-1 col-end-2 h-screen bg-primaryOne rounded-r-3xl flex flex-col justify-between">
            <Link to="/" className="bg-logo-primary h-24 flex justify-center items-center flex-col relative rounded-r-3xl">
                <img className="z-10 w-9" src={logo} alt="logo" />
                <div className="bg-logo-secondary h-12 w-24 absolute bottom-0 left-0 rounded-tl-3xl rounded-br-3xl"></div>
            </Link>
            <div className="flex flex-col items-center justify-evenly h-36">
                <img src={iconSun} alt="theme" />
                <div className="w-full h-px bg-sidebar-border"></div>
                <img className="rounded-full w-8 h-8" src={imageAvatar} alt="avatar" />
            </div>
        </aside>
    )
}

export default Sidebar
