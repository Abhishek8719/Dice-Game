
import styled from 'styled-components'


export const RoleDice = ({rollDice,CurrentDice}) => {
  


  return (
    <DiceContainer>
      <div className='dice' onClick={rollDice}> 
        <img src={`./images/dice_${CurrentDice}.png`} alt={`dice_${CurrentDice}`} height="220px" width="220px"/>
      </div> 
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
};

const DiceContainer = styled.div`  
  display: flex;
  justify-content: center;
  margin-top: 48px;
  align-items: center;
  flex-direction: column;
  .dice{
    cursor: pointer;
  }
  p{
    font-size: 24px;
    align-items: center;
    display: flex;
  }
`
