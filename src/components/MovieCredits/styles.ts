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

export const Subtitle = styled.h3`
  font-size: 28px;
  line-height: 32px;
  color: var(--text-dark-contrast);
  padding: 20px 0;

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

}

`

export const PersonCard = styled.li`
  background-color: var(--text-light);
  padding: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: .3s ease-in-out;

  &:hover {
    transform: scale(1.05);

  }

  img {
    width: 225px;
    margin-bottom: 16px;
    
  }
  
  p {
    color: var(--text-dark-contrast);
    
    &:not(&:last-child) {
      font-weight: bold;
      font-size: 18px;
      line-height: 30px;

    }

  }

`