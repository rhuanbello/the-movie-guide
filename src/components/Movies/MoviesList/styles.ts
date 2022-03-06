import styled from 'styled-components'; 

interface ContentProps {
  isRecommendation: undefined | boolean;
  isHomepage: undefined | boolean;
  isProfile: boolean;
}

export const Container = styled.ul`
  max-width: 85vw;
  margin: 30px auto;
 
`
export const Content = styled.ul<ContentProps>`
  display: grid; 
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); 
  height: ${({isHomepage}) => isHomepage && '130vh'};
  gap: 32px;
  padding-bottom: ${({isProfile}) => !isProfile && '24px'};

  li {

    p {
      display: ${({isProfile}) => isProfile && 'none'};

    }

    div {
      outline: ${({ isRecommendation  }) => isRecommendation && 'none'};
    
      img {
        width: ${({isRecommendation}) => isRecommendation && '150px'};

      }
    }
    
  } 

  @media(min-width: 500px) {
    grid-auto-flow: ${({isRecommendation}) => isRecommendation && 'column'};
    overflow-x: ${({isRecommendation}) => isRecommendation && 'auto'};
    
  }
  
  @media(max-width: 500px) {
    grid-template-columns: 1fr 1fr;
    
  }

  ::-webkit-scrollbar {
    background-color: #DDDDDD;
    height: 10px;
    border-radius: 100px;
    transition: .2s;
    
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--terciary);
    border-radius: 100px;

    &:hover {
      background: var(--primary);
  
    }

  }


`

export const SectionTitle = styled.h2`
  color: var(--primary);
  font-weight: bold;
  font-size: 24px;
  margin: 40px 0;
  

`
