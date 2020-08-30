import React from "react";
import {Service} from "./Service";
import api from "../assets/images/icon-api.svg";
import budgeting from "../assets/images/icon-budgeting.svg";
import onboarding from "../assets/images/icon-onboarding.svg";
import online from "../assets/images/icon-online.svg";

export const WhyUs = () => {
    return(
        <section className="why__us stack box">
            <div className="stack">
                <h1>Why choose Easybank?</h1>
                <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            </div>
            <div className="stack">
                <Service>
                    <img src={online} alt="Online Banking Icon"/>
                    <h2>Online Banking</h2>
                    <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                </Service>
                <Service>
                    <img src={budgeting} alt="Budgeting Icon"/>
                    <h2>Simple Budgeting</h2>
                    <p>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
                </Service>
                <Service>
                    <img src={onboarding} alt="Onboarding Icon"/>
                    <h2>Fast Onboarding</h2>
                    <p>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                </Service>
                <Service>
                    <img src={api} alt="API Icon"/>
                    <h2>Open API</h2>
                    <p>Manage your savings, investments, pension, and much more from one account.</p>
                </Service>
            </div>
        </section>
    );
};