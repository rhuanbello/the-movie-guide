  import styled from "styled-components";

export const Container = styled.main`
  padding-bottom: 50px;


`

interface HeaderProps {
  backdrop: string;

}

export const Cover = styled.header<HeaderProps>`
  display: flex;
  background: ${({ backdrop }) => `radial-gradient(99.21% 2931.1% at 99.21% 50%, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 48.75%, rgba(0, 0, 0, 0.6) 100%), linear-gradient(0deg, rgba(44, 52, 64, 0.4), rgba(44, 52, 64, 0.4)), url(${backdrop}) no-repeat center center`};
  background-size: cover;


`
export const ProfileHeader = styled.div` 
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85vw;
  margin: 0 auto;
  padding: 50px 0;

  @media (max-width: 880px) {
    flex-wrap: wrap;
    gap: 60px;
    padding-bottom: 100px;

    & > div:last-child {
      button {
        opacity: 1;
      }
    }

  }

  &:hover {
    & > div:last-child {
      button {
        opacity: 1;
      }
    }

  }
  
`

export const ProfileDetails = styled.div` 
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 880px) {
    justify-content: center;
    flex-wrap: wrap;
    width: 85vw;

  }

  img {
    border-radius: 50%;
    width: 200px;
    aspect-ratio: 1;
    object-fit: cover;
    outline: 3px solid var(--primary);
    transition: .2s;
    overflow: hidden;

    &:hover {
      transform: scale(1.1);
    }

  }

  & > div {
    display: flex;
    flex-direction: column;
    width: 220px;

  }

  h2, p {
    word-wrap: break-word;

  }

  p:first-of-type {
    margin-bottom: 10px;
    font-size: 14px;
    color: var(--primary);


  }
   
  
`

export const ProfileSection = styled.div`
  display: flex;
  position: relative;

  @media (min-width: 880px) {
    height: 100%;

  }

  
  @media (max-width: 880px) {
    width: 100%;

  }

  button {
    transition: .2s;
    opacity: 0;
    position: absolute;
    bottom: 0;
    right: 0;
    border: none;
    background: var(--secondary);
    padding: 7px;
    display: inline-block;
    width: 50%;
    border: 1px solid var(--primary);
    border-radius: 12px;
    color: var(--primary);
    font-size: 14px;
    align-self: center;

    @media (max-width: 880px) {
      bottom: -65px;
      right: 30%;
      width: 40%;

    }


  }

`

export const ProfileMoviesCount = styled.ul` 
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media (max-width: 880px) {
    margin: 0 auto;

  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;

    p {
      font-weight: 600;
      font-size: 20px;

    }

  }
  
`

export const MoviesSection = styled.section`
  width: 85vw;
  margin: 70px auto;


  h3 {
    font-size: 24px;
    
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background-color: #828282;
      margin-top: 10px;
      bottom: 0;

    }

  }

  

`