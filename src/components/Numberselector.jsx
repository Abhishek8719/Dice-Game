
import styled from 'styled-components'


export const Numberselector = ({setError,error,selectedNumber,setSelectedNumber}) => {

  const arrNumber = [1, 2, 3, 4, 5, 6];



const numberSelectorHandler=(Value)=>{
  setSelectedNumber(Value);
  setError(" ");
}
  
return (
    <NumberSelectorContainer >
      <p className='error'> {error} </p>
      <div className='flex'>

        {arrNumber.map((Value, i) => (
        <Box 
          isSelected ={Value ===selectedNumber}
          key={i} onClick={() => numberSelectorHandler(Value)}> {Value}
        </Box>
      ))}
      </div>
      
      <p> Select Number </p>
    </NumberSelectorContainer>
  );
}

const NumberSelectorContainer = styled.div `

   display: flex;
   flex-direction: column;
   align-items: end;

  .flex {
    display: flex;
    gap:24px;
    
  }
  p{
    
    font-size: 24px;
    font-weight:700px;
    align-items: end;
  
  }
  .error{
    color: red;

  }
`

const Box = styled.div`
    height: 72px;
    width: 72px;;
    border: 1px solid;
    display: grid;
    place-items:center;
    font-size:24px;
    font-weight:700;
    cursor: pointer;
    background-color:${(props) => props.isSelected ? "black":"white"} ;
    color:${(props) => !props.isSelected? "black":"white"} ;
    /* fill: ${(props) => props.isSelected? "blue": "red"} ; */
`
