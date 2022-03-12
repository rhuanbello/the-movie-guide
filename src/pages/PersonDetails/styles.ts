import styled from "styled-components";

export const ContainerPerson = styled.div`
  display: grid;

`

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  gap: 50px;
  width: 85vw;
  margin: 0 auto;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;

  }

  
`