import React, { useState } from "react";
import "./Image.css";

type Props = {
    src: string;
    alt?: string;
};

const Image: React.FC<Props> = ({ src, alt }) => {
    const [isZoomed, setIsZoomed] = useState(false);

    const toggleZoom = () => setIsZoomed(!isZoomed);

    return (
        <>
            <div className="image-container" >
                <img src={src} alt={alt || "Image"} className="image" onClick={toggleZoom} />
            </div>

            {isZoomed && (
                <div className="image-overlay" onClick={toggleZoom}>
                    <img src={src} alt={alt || "Zoomed"} className="image-zoomed" />
                </div>
            )}
        </>
    );
};

export default Image;
