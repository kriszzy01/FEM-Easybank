import React from "react";
import { Card } from "./Card";
import confetti from "../assets/images/image-confetti.jpg";
import currency from "../assets/images/image-currency.jpg";
import plane from "../assets/images/image-plane.jpg";
import restaurant from "../assets/images/image-restaurant.jpg";

export const LatestArticle = () => {
    return (
        <section className="latest__article">
            <h1> Latest Articles</h1>
            <div className="box">
                <Card>
                    <img src={currency} alt="Currency" />
                    <p>By Claire Robinson</p>
                    <h2>Receive money in any currency with no fees</h2>
                    <p>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single … </p>
                </Card>
                <Card>
                    <img src={restaurant} alt="Restaurant" />
                    <p>By Wilson Hutton</p>
                    <h2>Treat yourself without worrying about money</h2>
                    <p>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...</p>
                </Card>
                <Card>
                    <img src={plane} alt="Plane" />
                    <p>By Wilson Hutton</p>
                    <h2>Take your Easybank card wherever you go</h2>
                    <p>We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you ... </p>
                </Card>
                <Card>
                    <img src={confetti} alt="Confetti" />
                    <p>By Claire Robinson</p>
                    <h2>Our invite-only Beta accounts are now live! </h2>
                    <p>After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
                </Card>
            </div>
        </section>
    );
};