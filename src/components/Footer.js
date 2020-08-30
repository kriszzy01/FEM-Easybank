import React from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as FacebookIcon } from "../assets/images/icon-facebook.svg";
import { ReactComponent as InstagramIcon } from "../assets/images/icon-instagram.svg";
import { ReactComponent as PinterestIcon } from "../assets/images/icon-pinterest.svg";
import { ReactComponent as TwitterIcon } from "../assets/images/icon-twitter.svg";
import { ReactComponent as YoutubeIcon } from "../assets/images/icon-youtube.svg";
import { Button } from "./Button";

export const Footer = () => {
    return (
        <>
            <div className="stack">
                <Logo />
                <div className="queue">
                    <FacebookIcon />
                    <YoutubeIcon />
                    <TwitterIcon />
                    <PinterestIcon />
                    <InstagramIcon />
                </div>
            </div>
            <div className="stack">
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Blog</p>
            </div>
            <div className="stack">
                <p>Careers</p>
                <p>Support</p>
                <p>Privacy Policy</p>
            </div>
            <div className="stack">
                <Button/>
                <p>© Easybank. All Rights Reserved</p>
            </div>
        </>
    );
};