import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--primary);
  color: var(--text-light);

  & > div {
    width: 85vw;
    margin: 0 auto;
    padding-block: 72px 10px;
    display: flex;
    gap: 33px;
    flex-wrap: wrap;

    @media(max-width: 1200px) {
      justify-content: center;
      width: 90vw;
      
    }

  }


`

export const MoviePoster = styled.img`
  width: 380px;
  margin-bottom: -40px;
  border-radius: 8px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: .3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media(max-width: 1200px) {
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

  @media(max-width: 1100px) {
    width: 90vw;
    margin-bottom: 30px;

  }

  h2 {
    line-height: 38px;

  }

  & > div {
    display: flex;
    align-items: center;
    gap: 12px;
    max-width: 220px;
    margin: 10px 0;

  }

  & > article {
    display: grid;
    gap: 8px;
    line-height: 24px;
    margin: 20px 0;

    p {
      max-width: 50vw;
      color: var(--text-light-grey);

      @media(max-width: 1100px) {
        max-width: 100vw;

      }

    }
    

  }

`

export const Subtitle = styled.p`
  font-size: 18px;
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

export const CircularPercentage = styled.div`
  display: grid;
  place-items: center;
  width: 60px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--transparent-default);
  border: 5px solid var(--text-success);

  span {
    color: var(--text-success);
    font-weight: bold;

  }

`

export const MovieProducers = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 180px);
  gap: 34px;
  margin-block: 10px 20px;

  @media(max-width: 1100px) {
    grid-template-columns: repeat(5, 1fr);
    
  }


  @media(max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
    
  }

  li {

    
    span {
      display: block;

      &:first-child {
        font-size: 18px;
        font-weight: bold;

        @media(max-width: 650px) {
          margin-bottom: 10px;
        
        }

      }


      
    }

  }

`