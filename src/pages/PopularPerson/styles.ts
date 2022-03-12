import styled from "styled-components";

export const Container = styled.main`
  width: 85vw;
  margin: 0 auto;
  padding-block: 50px;

  h2 {
    color: var(--primary);
    margin-bottom: 10px;
    font-size: 24px;

  }
  
`

export const Cards = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); 
  gap: 20px;
  padding: 24px 0;

}

`

export const PersonCard = styled.li`
  background-color: var(--light);
  padding: 8px 8px 16px 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: .3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);

  }

  img {
    width: 100%;
    margin-bottom: 5px;
    
  }
  
  p {
    font-size: 14px;
    color: var(--dark);
    
    &:not(&:last-child) {
      font-weight: bold;
      font-size: 14px;
      margin-bottom: 5px;

    }

  }

`