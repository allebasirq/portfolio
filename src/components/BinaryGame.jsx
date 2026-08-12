import { useEffect, useState } from "react";

function BinaryGame() {

    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);
    const [gameStarted, setGameStarted] = useState(false);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [feedback, setFeedback] = useState("");

    const questions = [
        {
            letter: "h",
            decimal: 104,
            answer: "01101000"
        },
        {
            letter: "e",
            decimal: 101,
            answer: "01100101"
        },
        {
            letter: "y",
            decimal: 121,
            answer: "01111001"
        }
    ];

    const question = questions[questionIndex];

    const choices = [
        "01001000",
        "01100101",
        "01111001",
        "01101000",
    ];

    function handleAnswerClick(choice) {

        if (choice !== question.answer) {
            setFeedback("Not quite! Try again.");
            return;
        }

        setFeedback("");

        if (timeLeft <= 0) {
            return;
        }

        const newScore = score + 1;

        setScore(newScore);

        if (questionIndex < questions.length - 1) {
            setQuestionIndex(questionIndex + 1);
        }

    }

    useEffect(() => {

        if (!gameStarted || timeLeft <= 0 || score >= questions.length) {
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((time) => time - 1);
        }, 1000);

        return () => clearInterval(timer);

    }, [gameStarted, timeLeft, score]);

    function startGame() {
        setGameStarted(true);
    }

    function resetGame() {
        setScore(0);
        setTimeLeft(30);
        setGameStarted(false);
        setQuestionIndex(0);
    }

    return (


        <div className="binary-game">

            <div className="binary-game-header">

                <div>
                    <span className="binary-game-label">
                        ASCII // BINARY
                    </span>

                    <h2>
                        Binary Challenge
                    </h2>
                </div>

                <div className="binary-game-timer">
                    <span>TIME</span>
                    <strong>{timeLeft}s</strong>
                </div>

            </div>

            <div className="binary-game-score">
                SCORE <span>{score}</span> / {questions.length}
            </div>

            <div className="binary-game-area">

                {!gameStarted ? (

                    <div className="binary-game-start">

                        <span className="binary-game-start-label">
                            MINI GAME
                        </span>

                        <p>
                            Decode each character into binary before the timer runs out
                        </p>

                        <button
                            className="binary-start-button"
                            onClick={startGame}
                        >
                            ▶ START
                        </button>

                    </div>

                ) : timeLeft <= 0 ? (

                    <div className="binary-game-loss">

                        <h3>
                            You just lost the game
                        </h3>

                        <h4>
                            (both of them if you know what I mean)
                        </h4>

                        <button 
                            className="binary-start-button"
                            onClick={resetGame}
                        >
                            Try Again
                        </button>

                    </div>

                ) : score >= questions.length ? (

                    <div className="binary-game-win">

                        <h3>
                            'Hey' to you too!
                        </h3>

                        <p>
                            Maybe you really do speak binary
                        </p>

                        <button onClick={resetGame}>
                            Play Again
                        </button>

                    </div>

                ) : (

                    <div className="binary-question">

                        <p className="binary-question-label">
                            DECODE THIS CHARACTER
                        </p>

                        <h3>
                            What is <span>"{question.letter}"</span> in binary?
                        </h3>

                        <div className="binary-ascii">
                            ASCII <span>{question.decimal}</span>
                        </div>

                        {feedback && (
                            <p className="binary-feedback">
                                {feedback}
                            </p>
                        )}

                        <div className="binary-choices">

                            {choices.map((choice) => (

                                <button
                                    key={choice}
                                    onClick={() => handleAnswerClick(choice)}
                                >
                                    {choice}
                                </button>

                            ))}

                        </div>

                    </div>

                )}

            </div>

        </div>

    );

}

export default BinaryGame;