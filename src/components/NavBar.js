import React, { useState, useEffect } from 'react'
import './styles/NavBar.css'

function NavBar({ displayHandler }) {
    const [click, setClick] = useState(false)
    const [y, setY] = useState(0)
    const toogleNav = () => setClick(!click)
    const closeNav = () => setClick(false)

    useEffect(() => {
        if (click) document.body.style.overflow = "hidden"
        else document.body.style.overflow = "auto"
        function handleScroll() {
            if (!click) {
                if (y > window.scrollY)
                    document.getElementById("nav_style").classList.add("nav_style_changer_mobile")
                else if (y < window.scrollY)
                    document.getElementById("nav_style").classList.remove("nav_style_changer_mobile")
                setY(window.scrollY)
            }
        }
        document.addEventListener("scroll", handleScroll)
        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    }, [click, y])

    return (
        <>
            <div className="navbar_container" id="nav_style">
                <div className="container">
                    <div className="navbar nav_mobile">
                        <a href="/">
                            <img
                                className="navbar_logo"
                                src="/assets/logo.png"
                                alt="logo"
                            />
                        </a>
                        <ul className={click ? "navbar_right active" : "navbar_right"}>
                            <li className="d-lg-none"><a href="# " onClick={closeNav} >Home</a></li>
                            <li><a href="#aloveraSection" onClick={closeNav} >Aloe Vera Products</a></li>
                            <li><a href="#avocadoSection" onClick={closeNav} >Avocado Products</a></li>
                            <li><a href="#cocoaSection" onClick={closeNav} >Cocoa Products</a></li>
                            <li><a href="#our_story_section" className="d-lg-none" onClick={closeNav} >About Us</a></li>
                            <li><a href="# " className="d-lg-none" onClick={displayHandler} >Contact Us</a></li>
                        </ul>
                        <button className="btn_contact d-none d-lg-block" onClick={displayHandler}>
                            Contact Us
                        </button>
                        <span onClick={toogleNav} className="hamburgerMenu d-none">{click ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar
