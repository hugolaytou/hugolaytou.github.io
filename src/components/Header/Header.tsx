import React from "react";
import "./Header.css";
import logoCultureEnfance from "../../assets/logoCultureEnfance.png";
import logoLaboCulture from "../../assets/logoLaboCulture.jpg";
import logoPixelsPalettes from "../../assets/logo_pixels_and_palettes_V3.png";



const Header: React.FC = () => {
    return (
        <header className="header">
            <span>
                <img src={logoPixelsPalettes} alt="Logo Labo des cultures" className="logoPixelsPalettes" />
            </span>
            <span>
                <img src={logoCultureEnfance} alt="Logo Culture de l'enfance" className="logoCultureEnfance" />
                <img src={logoLaboCulture} alt="Logo Labo des cultures" className="logoLabo" />
            </span>
            
        </header>
    );
};

export default Header;
