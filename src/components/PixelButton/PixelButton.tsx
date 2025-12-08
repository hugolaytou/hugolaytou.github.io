import React from "react";
import "./PixelButton.css";

interface PixelButtonProps {
    text: string;
    color?: string; // couleur dynamique du fond
    borderImage?: string; // image de bordure
    onClick?: () => void;
    className?: string;
}

const PixelButton: React.FC<PixelButtonProps> = ({ text, color = "#000000", borderImage, onClick, className = "",}) => {
    return (
        <div className={`pixel-container ${className}`}>
            <div
                className="pixel"
                role="button"
                onClick={onClick}
                style={{"--pixel-color": color, borderImage: borderImage ? `url(${borderImage}) 20 stretch` : undefined } as React.CSSProperties}>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default PixelButton;
