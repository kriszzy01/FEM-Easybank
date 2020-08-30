import React from "react";
import "./styles/layout.css";
import "./styles/components.css";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { WhyUs } from "./components/WhyUs";
import { LatestArticle } from "./components/LatestArticle";
import { Footer } from "./components/Footer";

export const App = () => {
    return (
        <>
            <header className="box"><Header /></header>
            <main className="stack">
                <Intro />
                <WhyUs />
                <LatestArticle />
            </main>
            <footer className="stack box"><Footer /></footer>
        </>
    );
};