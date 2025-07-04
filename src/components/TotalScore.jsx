import styled from "styled-components";

import React from 'react'

export const TotalScore = ({score}) => {
  return (

     <main> 
        <ScoreeContainer>
            <h1> {score}</h1>
            <p> Total Score </p>
        </ScoreeContainer>
     </main>
  )
};

const ScoreeContainer = styled.div`
max-width: 200px;
text-align: center;


    h1{
    font-size:100px;   
    line-height: 10px;
    }
    p{
        font-size: 24px;
        font-weight:500px;
    }
`
