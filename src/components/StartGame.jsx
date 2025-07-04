import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Button';

export const StartGame = ({toggle}) => {

  
  const ImageContainer = styled.div`
    margin-right: 40px;
  `;

  const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  `;

  return (
    <Container>  

      <ImageContainer> 
        <img src='/images/dices.png' alt='image' />    
      </ImageContainer>

      <ContentContainer>

        <h1> Dice Game </h1>

        <Button onClick={toggle}> PLAY NOW </Button>
        
      </ContentContainer>
    </Container>
  )
}

const Container = styled.div`
max-width: 1180px;
display: flex;
margin: 0 auto;
align-items: center;
height:100vh;
grid-column-gap:20px

`




