import React from "react";
import imageMockup from "../assets/images/image-mockups.png";
import {Button} from "./Button";

export const Intro = () => {
    return (
        <section className="intro">
            <div>
                <img src={imageMockup} alt="Mockup of Phones" />
            </div>
            <div className="stack box">
                <h1>Next generation digital banking</h1>
                <p>
                    Take your financial life online. Your Easybank account 
                    will be a one-stop-shop for spending, saving, budgeting, 
                    investing, and much more.
                </p>
                <Button/>
            </div>
        </section>
    );
};