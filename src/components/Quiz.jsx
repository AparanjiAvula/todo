import React, { useContext, useState } from 'react'
import { questions } from '../helpers/QuestionBank';
import { QuizContext } from '../helpers/Context';

function Quiz() {
    const [currQuestion,setCurrQuestion]=useState(0);
    const [optionChoosen,setOptionChoosen]=useState('')

    const {score,setScore,setGames}=useContext(QuizContext);

    const Nextques=()=>{
        if(questions[currQuestion].answer===optionChoosen)
        {
            setScore(score+1)
        }
        setCurrQuestion(currQuestion+1)
    }

    const finishQuiz=()=>{
        if(questions[currQuestion].answer===optionChoosen)
        {
            setScore(score+1)
        }
        setGames('endScreen');

    }
  return (
    <>
      <div className="Quiz">
            <h1>{currQuestion+1}.{questions[currQuestion].prompt}</h1>
            <div className="options">
                <button onClick={()=>setOptionChoosen('A')}>A.{questions[currQuestion].optionA}</button>
                <button onClick={()=>setOptionChoosen('B')}>B.{questions[currQuestion].optionB}</button>
                <button onClick={()=>setOptionChoosen('C')}>C.{questions[currQuestion].optionC}</button>
                <button onClick={()=>setOptionChoosen('D')}>D.{questions[currQuestion].optionD}</button>
            </div>
            {currQuestion==questions.length-1?(<button onClick={finishQuiz}>Finish Quiz</button>):
            <button onClick={Nextques}>Next Question</button>}
            
      </div>
    </>
  )
}

export default Quiz