import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import {ReactComponent as Logo} from "../assets/images/logo.svg";
import {Nav} from "./Nav";

export const Header = () => {
    const [toggleNav, setToggleNav] = useState(false);

    const barsIcon = <FontAwesomeIcon icon={faBars}/>
    const timesIcon = <FontAwesomeIcon icon={faTimes}/> 

    const handleToggleNav = () => setToggleNav(!toggleNav);

    return(
        <>
            <Logo/>
            <button onClick={handleToggleNav}>{toggleNav ? timesIcon : barsIcon}</button>
            <Nav toggleNav={toggleNav}/>
        </>
    );
}