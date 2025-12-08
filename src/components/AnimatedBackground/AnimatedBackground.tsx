import React, { useEffect, useRef } from "react";
import "./AnimatedBackground.css";

const COLORS = [
    "#416680", "#a39382", "#2d2e87", "#448c77",
    "#ffcc19", "#7874b5", "#5293d7", "#ee7656", "#000000"
];

const AnimatedBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const context = canvas.getContext("2d")!;

        const STAR_SIZE = 6; 
        const STAR_MIN_SCALE = 0.3; 
        const OVERFLOW_THRESHOLD = 50;
        const STAR_COUNT = (window.innerWidth + window.innerHeight) / 8;

        let scale = window.devicePixelRatio || 1;
        let width = window.innerWidth * scale;
        let height = window.innerHeight * scale;

        canvas.width = width;
        canvas.height = height;

        const stars = Array.from({ length: STAR_COUNT }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE),
            color: COLORS[Math.floor(Math.random() * COLORS.length)]
        }));

        let velocity = { x: 0, y: 0, z: 0.0005 };

        const resize = () => {
            scale = window.devicePixelRatio || 1;
            width = window.innerWidth * scale;
            height = window.innerHeight * scale;
            canvas.width = width;
            canvas.height = height;
        };

        const recycleStar = (star: any) => {
            star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE);
            star.x = Math.random() * width;
            star.y = Math.random() * height;
            star.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        };

        const update = () => {
            stars.forEach((star) => {
                star.x += velocity.x * star.z;
                star.y += velocity.y * star.z;
                star.x += (star.x - width / 2) * velocity.z * star.z;
                star.y += (star.y - height / 2) * velocity.z * star.z;
                star.z += velocity.z;

                if (
                    star.x < -OVERFLOW_THRESHOLD ||
                    star.x > width + OVERFLOW_THRESHOLD ||
                    star.y < -OVERFLOW_THRESHOLD ||
                    star.y > height + OVERFLOW_THRESHOLD
                ) {
                    recycleStar(star);
                }
            });
        };

        const render = () => {
            context.clearRect(0, 0, width, height);
            stars.forEach((star) => {
                context.beginPath();
                context.lineCap = "round";
                context.lineWidth = STAR_SIZE * star.z * scale;
                context.globalAlpha = 0.5 + 0.3 * Math.random(); 
                context.strokeStyle = star.color;
                context.moveTo(star.x, star.y);
                context.lineTo(star.x, star.y); 
                context.stroke();
            });
        };

        const step = () => {
            update();
            render();
            requestAnimationFrame(step);
        };

        step();

        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    return <canvas ref={canvasRef} className="animated-bg"></canvas>;
};

export default AnimatedBackground;
