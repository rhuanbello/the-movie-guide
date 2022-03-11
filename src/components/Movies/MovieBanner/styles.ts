import styled from "styled-components";

interface ContainerProps {
  backdrop: string;

}

export const Container = styled.section<ContainerProps>`
  background: ${({ backdrop }) => `linear-gradient(0deg, rgba(44, 52, 64, 0.7), rgba(44, 52, 64, 0.7)), radial-gradient(100% 576% at 0% 50%, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.18) 50%, rgba(0, 0, 0, 0.6) 100%), url(${backdrop}) no-repeat center center`};
  background-size: cover;
  color: var(--text-light);
  min-height: 60vh;

  & > div {
    width: 85vw;
    margin: 0 auto;
    padding-block: 72px 10px;
    display: flex;
    gap: 50px;

    @media(max-width: 910px) {
      justify-content: center;
      width: 90vw;
      flex-wrap: wrap;
      
    }

  }


`

export const MoviePoster = styled.img`
  width: 300px;
  margin-bottom: -80px;
  border-radius: 8px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: .3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media(max-width: 910px) {
    width: 35vw;
    margin-block: 0 20px;
    
  }

  @media(max-width: 600px) {
    width: 50vw;
    
  }

`

export const MovieInfos = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  @media(max-width: 1100px) {
    width: 90vw;
    margin-bottom: 30px;

  }

  h2 {
    line-height: 30px;

  }

  & > article {
    display: grid;
    gap: 4px;
    line-height: 24px;
    margin: 10px 0;

    p {
      font-size: 15px;
      max-width: 50vw;
      color: var(--text-light-grey);

      @media(max-width: 1100px) {
        max-width: 100vw;

      }

    }
    

  }

`

export const Subtitle = styled.p`
  font-size: 16px;
  line-height: 24px;

  span {
    &:not(&:last-child) {
      &::after {
        content: '•';
        margin-inline: 7px;

      }

    }

  }

`

export const MovieBannerActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
  flex-wrap: wrap;
  
  @media(max-width: 480px) {
    gap: 20px;
    margin: 15px 0;

  }

  & > div {
    display: flex;
    gap: 20px;

  }

  p {
    max-width: 100px;

  }

  button {
    border: none;
    background: rgba(255, 255, 255, 0.1);
    padding: 4px;
    border-radius: 50%;

    &:last-of-type {
      border-radius: 7px;

    }

  }

`

export const CircularPercentage = styled.div`
  display: grid;
  place-items: center;
  border: 5px solid var(--text-success);

  span {
    color: var(--text-success);
    font-weight: bold;

  }

`

export const MovieProducers = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 180px);
  gap: 30px;
  margin-block: 10px 10px;

  @media(max-width: 1100px) {
    grid-template-columns: repeat(5, 1fr);
    
  }


  @media(max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
    
  }

  li {

    
    span {
      display: block;

      &:first-of-type {
        font-size: 16px;
        font-weight: bold;

        @media(max-width: 650px) {
          margin-bottom: 10px;
        
        }

      }

      &:last-of-type {
        font-size: 14px;

      }

    }

  }

`