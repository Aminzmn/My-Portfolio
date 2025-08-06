import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.css";
import StyleContext from "../../contexts/styleContext";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { greeting } from "../../portfolio";

const Header = () => {
    const { isDark } = useContext(StyleContext);

    return (
        <Headroom>
            <header className={isDark ? "dark-menu header" : "header"}>
                <a href="/" className="logo">
                    <span className="grey-color"> &lt;</span>
                    <span className={isDark ? 'dark-menu logo-name' : 'logo-name'}>{greeting.username}</span>
                    <span className="grey-color">/&gt;</span>
                </a>
                
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label
                    className="menu-icon"
                    htmlFor="menu-btn"
                    style={{ color: "white" }}
                >
                    <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
                </label>

                <ul className={isDark ? "dark-menu menu" : "menu"}>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#education">Education</a>
                </li>
                <li>
                    <a href="#experience">Work Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact Me</a>
                </li>
                <li>
                    <a href="# ">
                        <ToggleSwitch />
                    </a>
                </li>
            </ul>
            </header>
        </Headroom>
    );
}
export default Header;
