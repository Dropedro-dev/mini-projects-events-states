import { Question } from "@/types/question"
import { useState } from "react";

type Props = {
    question: Question;
    count: number;
    onAnswer: (answer: number) => void;
}
export const QuestionItem = ({question, count, onAnswer}: Props) => {
    const [selectAnswer, setSelectAnswer] = useState<number | null>(null)

    const checkQuestion = (key: number) => {
        if(selectAnswer === null) {
            setSelectAnswer(key);
            
            setTimeout(()=>{
                onAnswer(key);
                setSelectAnswer(null);
            }, 2000)
            
        }
    }
    
    return (
        <div>
            <div className="text-3xl font-bold mb-3">{count}. {question.question}</div>
            <div>
                {question.options.map((item, key)=>(
                    <div
                        key={key}
                        onClick={()=> checkQuestion(key)}
                        className={`border px-3 py-2 rounded-md text-lg mb-4 cursor-pointer border-blue-300 bg-blue-100
                            ${selectAnswer !== null ? 'cursor-auto' : 'hover:opacity-60'}
                            ${selectAnswer !== null && selectAnswer === question.answer && selectAnswer === key && 'bg-green-100 border-green-300'}
                            ${selectAnswer !== null && selectAnswer !== question.answer && selectAnswer === key && 'bg-red-100 border-red-300'}
                            `}
                    >{item}</div>
               ))}
            </div>
        </div>
    )
 }