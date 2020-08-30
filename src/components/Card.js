import React from "react";

export const Card = ({ children: [image, ...text]}) => {
    return (
        <div className="card">
            {image}
            <div className="box stack">{text}</div>
        </div>
    );
};