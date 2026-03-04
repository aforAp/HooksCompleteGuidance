import { useState, useCallback, useRef } from "react";
import questions from "../questions.js";
import QuestionTimer from "./QuestionTimer.jsx";
import Question from "./Question.jsx";
import Answers from "./Answers.jsx";
import Summary from "./Summary.jsx";
export default function Quiz() {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  //storing the selected answer for each question
  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const quizIsFinished = activeQuestionIndex === questions.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setAnswerState("answered");
      setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);
      setTimeout(() => {
        if (selectedAnswer === questions[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex],
  );
  //why activeQuestionIndex is in the dependency array bcoz when we select the answer the component will re render and the activeQuestionIndex will update to the next question index and we want to check the answer of the current question not the next question. so we need to add activeQuestionIndex in the dependency array. if we don't add it then it will always check the answer of the first question.
  //it will re create from the scratch.
  //ANSWERS will be stored of the previous questions.

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (quizIsFinished) {
    return <Summary userAnswers={userAnswers} />;

  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionText={questions[activeQuestionIndex].text}
        answers={questions[activeQuestionIndex].answers}
        onSelectAnswer={handleSelectAnswer}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        answerState={answerState}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
