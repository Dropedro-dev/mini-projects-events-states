import { questions } from "@/data/questions";
import { Question } from "@/types/question"


type Props ={
    questions: Question[];
    answers: number[]
}

export const QuestionsResults = ({questions, answers}: Props) => {   
    return (
        <div>
            {questions.map((item, key)=> (
                <div key={key} className="mb-3">
                    <div className="font-bold">{key +1}. {item.question}</div>
                    <div>
                        <span>(você {item.answer === answers[key] ? 'acertou': 'errou'})</span>
                        <span> resposta correta: </span>
                        {item.options[item.answer]}
                    </div>
                </div>
            ))
            }
        </div>
    )
}