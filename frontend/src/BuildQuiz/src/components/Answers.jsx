import { useRef } from "react";

export default function Answers({answers, selectedAnswer, answerState, onSelect }) {
     const shuffledAnswers = useRef(null);
        if(!shuffledAnswers.current) {
shuffledAnswers.current = [...answers];
  shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }
 return (
     <ul id="answers">
          {shuffledAnswers.current.map((answer) => {
            const isSelected = selectedAnswer === answer;
            //why we are checking the last answer in the userAnswers array bcoz we are storing the selected answer at last so we 
            //we are checking the last answer and comparing it too.
             let cssClasses = '';
            if (answerState === 'answered' && isSelected) {
              cssClasses = 'selected';
            }

            if(answerState === 'correct' || answerState === 'wrong' && isSelected) {
              cssClasses = answerState;
            } 
            return (
             <li key={answer} className="answer">
              <button onClick={() => onSelect(answer)} className={cssClasses}>
                {answer}
              </button>
            </li>
            )
          }
           
         ) }
        </ul>
 )   
}