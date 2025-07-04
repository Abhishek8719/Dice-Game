import React from 'react'
import { TotalScore } from './TotalScore'
import { Numberselector } from './Numberselector'
import styled from 'styled-components'
import { RoleDice } from './RoleDice'
import { useState } from 'react';
import { Button } from '../styled/Button'
import { Rules } from './Rules'

export const GamePlay = () => {

  const [score,setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [CurrentDice, setCurrentDice] = useState(1);
  const [error,setError] = useState("");
  const [showRules ,setShowRules] =useState(false);



  const rollDice = () => {
     if(!selectedNumber){
      setError("You have not selected any number");
      return;
     } 
     setError(" ");
    const randomNumber = Math.floor(Math.random() * 6) + 1; // 1 to 6
    setCurrentDice(randomNumber);

   
  
 if(selectedNumber === randomNumber){
    setScore((prev)=> prev + randomNumber);
 } else {
    setScore((prev)=> prev-2);
 };

    setSelectedNumber(undefined);
  }
const resetScore =()=>{
  setScore(0);

}

  return (
    <MainContainer> 
    <div className='top_section'>
      <TotalScore score={score}/>
  
      <Numberselector 
      error ={error}
      setError ={setError}
      selectedNumber={selectedNumber}
      setSelectedNumber={setSelectedNumber}/>

    </div>
    <RoleDice CurrentDice={CurrentDice} rollDice={rollDice}/>
    <div className='btns'> 
      <Button onClick={resetScore}> Reset Score  </Button>
      <Button onClick={()=>setShowRules(prev=>!prev)}> {showRules ? "Hide" :"show"} Rules </Button>
    </div>
    { showRules && < Rules /> }
    </MainContainer>
    
  )
}
const MainContainer = styled.div `
padding-top: 70px;
.top_section {
  display: flex;
  justify-content: space-around;
  align-items: end;
  
  
}
.btns{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .625rem;

}
  
`

