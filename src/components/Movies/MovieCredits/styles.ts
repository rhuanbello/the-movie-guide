import styled from "styled-components";

export const Container = styled.main`
  padding-top: 70px;
  background-color: var(--background);

`

export const Content = styled.div`
  width: 85vw;
  margin: 0 auto;

  @media(max-width: 1000px) {
    width: 90vw;

    iframe {
      width: 90vw;

    }

  }

`

export const Subtitle = styled.h2`
  font-size: 24px;
  line-height: 32px;
  color: var(--primary);
  padding: 10px 0;

  &.Trailer {
    padding: 40px 0;

  }

  &.Recommendations {
    padding-top: 40px;

  }


`

export const Cards = styled.ul`
  display: flex;
  overflow-x: auto;
  gap: 16px;
  padding: 24px 0;

  @media(max-width: 1000px) {

    iframe {
      width: 85vw;

    }

  }

  @media(max-width: 650px) {
    width: 95vw;
    
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

}

`

export const PersonCard = styled.li`
  background-color: var(--light);
  padding: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: .3s ease-in-out;
  cursor: pointer;


  &:hover {
    transform: scale(1.05);

  }

  img {
    width: 160px;
    margin-bottom: 5px;
    
  }
  
  p {
    font-size: 16px;
    color: var(--dark);
    
    &:not(&:last-child) {
      font-weight: bold;
      font-size: 14px;
      line-height: 30px;

    }

  }

`