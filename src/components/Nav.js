import React from "react";

export const Nav = ({ toggleNav }) => {
    const navItems = ["Home", "About", "Contact", "Blog", "Careers"];

    return (
        <nav className={toggleNav ? "showNav" : null}>
            <ul className="box stack">
                {navItems.map((items, index) => <li key={items + index}>{items}</li>)}
            </ul>
        </nav>
    );
} 