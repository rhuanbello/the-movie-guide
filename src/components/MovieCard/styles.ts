import styled from 'styled-components'; 

export const Movie = styled.li`
  font-weight: 700; 
  font-size: 16px;
  line-height: 24px;

  img {
    border-radius: 4px;
    transition: .3s;
    max-width: 500px;
    cursor: pointer;

    &:hover {
      filter: brightness(0.8);

    }

    @media(max-width: 500px) {
      width: 35vw;
      
    }
  
  }

  p:last-child {
    font-size: 14px;
    color: var(--text-dark-light);
  }

`