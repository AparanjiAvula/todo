import React, { useState } from "react";
import './App.css'
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import { QuizContext } from "./helpers/Context";
function App() {
  const [game,setGames]=useState('menu')
  const [score,setScore]=useState(0);
  return (
    <>
      <div className="App">
          <h1>Quiz App</h1>
          <QuizContext.Provider value={{game,setGames,score,setScore}}>
              {game==='quiz' && <Quiz/>}
              {game==='menu' && <MainMenu/>}
              {game==='endScreen' && <EndScreen/>}
          </QuizContext.Provider>
       </div>
    </>
  );
}

export default App;
