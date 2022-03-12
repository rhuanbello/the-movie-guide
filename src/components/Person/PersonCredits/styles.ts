import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

 
   

`

export const PersonInfo = styled.li`
  width: 300px;

  @media (max-width: 800px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;

  }

  @media (max-width: 800px) {
    &:last-child {
      display: none;
    }

  }

  h3 {
    font-size: 20px;
    margin-bottom: 5px;

  }

  p {
    line-height: 32px;

  }

`

