import styled from "styled-components";

export const Container = styled.section`
  padding-block: 100px 80px;
  width: 85vw;
  margin: 0 auto;
  display: grid;
  gap: 50px;
  grid-template-columns: 1fr 2.5fr;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    padding-block: 50px;

    a {
      margin: 0 auto;

    }

  }

`

export const PersonPoster = styled.img`
  width: 300px;
  cursor: pointer;
  border-radius: 15px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: .2s;

  &:hover {
    transform: scale(1.1);

  }
  
`

export const PersonBio = styled.article`
  display: flex;
  flex-direction: column;
  text-align: justify;
  white-space: pre-line;
  min-height: 100%;
  color: var(--light);
  gap: 15px;

  h3 {
    font-size: 20px;

  }

  p {
      line-height: 24px;
      font-size: 14px;
      color: #DDD;

  }

`
