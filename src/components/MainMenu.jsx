import React, { useContext } from 'react'
import { QuizContext } from '../helpers/Context'
import '../App.css'
function MainMenu() {
const {game,setGames}=useContext(QuizContext)
  return (
    <>
      <div className="Menu">
        <button onClick={()=>setGames('quiz')}>Start Quiz</button>
      </div>
    </>
  )
}

export default MainMenu