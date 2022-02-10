import styled from 'styled-components'; 

interface ContainerProps {
  isRecommendation: undefined | boolean;

}

export const Container = styled.ul<ContainerProps>`
  max-width: 85vw;
  margin: 30px auto;
  display: grid; 
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
  gap: 32px;

  @media(min-width: 500px) {
    grid-auto-flow: ${({isRecommendation}) => isRecommendation && 'column'};
    overflow-x: ${({isRecommendation}) => isRecommendation && 'scroll'};
    
  }
  
  @media(max-width: 500px) {
    grid-template-columns: 1fr 1fr;
    
  }

  ::-webkit-scrollbar {
    background-color: #DDDDDD;
    height: 12px;
    border-radius: 100px;
    
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ADADAD;
    border-radius: 100px;

    &:hover {
      background: var(--primary);
  
    }

  }

  

`


