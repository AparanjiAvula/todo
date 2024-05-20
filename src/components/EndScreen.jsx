import React, { useContext, useState } from 'react'
import '../App.css'
import { questions } from '../helpers/QuestionBank'
import { QuizContext } from '../helpers/Context'

function EndScreen() {
    const {score,setScore,setGames}=useContext(QuizContext)
    

    const restart=()=>{
        setScore(0);
        setGames('menu')
    }
  return (
   <>
      <div className="EndScreen">
         <h1>Quiz Finished</h1>
         <h3>
            {score}/{questions.length}
         </h3>
         <button onClick={restart}>Restart Quiz</button>
      </div>
   </>
  )
}

export default EndScreen