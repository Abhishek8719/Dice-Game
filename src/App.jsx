
import { StartGame } from "./components/StartGame"
import { useState } from "react";
import { GamePlay } from "./components/GamePlay";
import { TotalScore } from "./components/TotalScore";


function App() {

const [isGameStarted,setIsGameStarted] = useState(false);
const toggleGameplay = ()=>{
  setIsGameStarted((prev) => !prev);
}

  return (
    <>
        
      {isGameStarted ? <GamePlay/>: <StartGame toggle ={toggleGameplay} />}
      
        
    </>
  )
}

export default App
