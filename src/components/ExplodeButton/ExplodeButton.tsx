import React from "react";
import "./ExplodeButton.css";

type ExplodeButton = {
    text: string;
    color?: string;
    onClick?: () => void;
    image?: string;
    className?: string;
};

const ExplodeButton: React.FC<ExplodeButton> = ({
                                                     text,
                                                     color = "#ec0b36",
                                                     image = "/assets/pixelBlack.png",
                                                     onClick,
                                                     className = "",
                                                 }) => {
    return (
        <button className={`pixel-btn ${className}`}
            style={{
                ["--pixel-color" as any]: color,
                ["--pixel-image" as any]: `url(${image})`, // ✅ variable CSS pour l’image
            }}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default ExplodeButton;
