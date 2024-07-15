import { questions } from "@/data/questions";
import { useState } from "react";
import { QuestionItem } from "./questionItem";
import { QuestionsResults } from "./questionsResults";

const Quiz = () => {
    const [answers, setAnswers] = useState<number[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const title = 'Quiz de culinária';
    const [showResult, setShowResult] = useState(false)

    const loadNextQuestion = () => {
        if(questions[currentQuestion +1]){
            setCurrentQuestion(currentQuestion +1)
        }else{
            setShowResult(true);
        }
    }

    const handleAnswered = (answer: number) =>{ 
        setAnswers([...answers, answer]);
        loadNextQuestion();
    }

    const restartQuiz = () => {
        setAnswers([]);
        setCurrentQuestion(0);
        setShowResult(false);
    }

    return (
        <div className="w-screen h-screen bg-blue-600 flex justify-center items-center">
            <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
                <div className="p-5 font-bold tex-2xl border-b border-gray-300">{title}</div>
                <div className="p-5">
                    {!showResult &&
                        <QuestionItem
                        question={questions[currentQuestion]}
                        count={currentQuestion +1}
                        onAnswer={handleAnswered} />
                    }
                    {showResult &&
                        <QuestionsResults questions={questions} answers={answers} />
                    }
                </div>
                <div className="p-5 text-center border-t border-gray-300">
                    {!showResult &&
                        `${currentQuestion +1} de ${questions.length} pergunta${questions.length === 1 ? '':'s'}`}

                    {showResult &&
                        <button className="px-3 py-2 rounded-md bg-blue-800 text-white" onClick={restartQuiz}>Reiniciar Quiz</button>}
                    
                </div>
            </div>
        </div>
    )
}

export default Quiz;