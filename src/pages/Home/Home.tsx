import React from "react";
import { random } from "../../hooks/random";
import Image from "../../components/Image/Image";
import Question from "../../components/Question/Question";
import Header from "../../components/Header/Header";
import AnimatedBackground from "../../components/AnimatedBackground/AnimatedBackground";
import PixelButton from "../../components/PixelButton/PixelButton.tsx";
import questionsJson from "../../assets/questions.json"
import borderSalmon from "../../assets/buttonBgSalmon.png";
import borderBlue from "../../assets/buttonBgBlue.png";
import borderBlack from "../../assets/buttonBgBlack.png";

import "./Home.css";

const images = Object.values(
    import.meta.glob("../../assets/images/*.{jpg,jpeg,png,gif}", { eager: true, as: "url" })
) as string[];

const Home: React.FC = () => {
    const [currentImage, nextImage] = random(images);
    const [currentQuestion, nextQuestion] = random(questionsJson);

    const handleNextQuestion = () => {
        nextQuestion();
    };

    const handleNextBoth = () => {
        nextImage();
        nextQuestion();
    };

    return (
        <div className="content">
            <AnimatedBackground />
            <Header/>
            <div className="blob"></div>
            <div className="blob-2"></div>
            <div className="blob-3"></div>
            <div className="blob-4"></div>
            <div className="blob-5"></div>
            <div className="blob-6"></div>
            <div className="blob-7"></div>
            <Image src={currentImage}/>

            <div className="question-wrapper">
                <Question  text={currentQuestion.question} color={currentQuestion.color}/>
            </div>

            <div className="home-buttons">
                <PixelButton text="Changer l'oeuvre"    onClick={nextImage}          color={"#5293d7"} borderImage={borderBlue}/>
                <PixelButton text="Changer la question" onClick={handleNextQuestion} color={"#ee7656"} borderImage={borderSalmon}/>
                <PixelButton text="Tout changer"        onClick={handleNextBoth}                       borderImage={borderBlack} />
            </div>
        </div>
    );
};

export default Home;
