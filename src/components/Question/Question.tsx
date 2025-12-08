import React from "react";
import "./Question.css";

type Props = {
    text: string;
    color?: string; 
};

const Question: React.FC<Props> = ({ text, color = "#5293d7" }) => (
    <div
        className="question-container"
        style={{ "--glow-color": color } as React.CSSProperties}
    >
        {text}
    </div>
);

export default Question;
