import React from "react";
import Image from "../../components/Image/Image";
import Question from "../../components/Question/Question";
import Header from "../../components/Header/Header";
import { random } from "../../hooks/random";
import questionsJson from "../../assets/questions.json";
import "./Home.css";
import backGroundSalmonButton from "../../assets/pixelSalmon2.png";
import backGroundBlueButton from "../../assets/pixelBlue2.png";
import backGroundBlackButton from "../../assets/pixelBlack2.png";
import ExplodeButton from "../../components/ExplodeButton/ExplodeButton.tsx";

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

    const handleFullscreen = () => {
        const elem = document.documentElement;

        if (!document.fullscreenElement) {
            elem.requestFullscreen?.();
        } else {
            document.exitFullscreen?.();
        }
    };

    return (
        <div className="content">
            <Header/>
            <Image src={currentImage}/>
            <div className="question-wrapper">
                <Question  text={currentQuestion.question} color={currentQuestion.color}/>
            </div>

            <div className="home-buttons">
                <ExplodeButton text="Changer l'oeuvre" color={"#5293d7"} image={backGroundBlueButton}  onClick={nextImage}/>
                <ExplodeButton text="Changer la question" color="#ee7656" image={backGroundSalmonButton} onClick={handleNextQuestion}/>
                <ExplodeButton text="Tout changer" color="black" image={backGroundBlackButton} onClick={handleNextBoth}/>
            </div>
            <button className={"fullScreenButton"} onClick={handleFullscreen}>⛶</button>
        </div>
    );
};

export default Home;
