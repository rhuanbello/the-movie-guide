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

`
export const ProfileHeader = styled.div` 
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85vw;
  margin: 0 auto;
  padding: 50px 0;
  
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

  p {
    margin: 10px 0;

  }
   
  
`

export const ProfileSection = styled.div`
  display: flex;
  position: relative;
  height: 100%;

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


  }

`

export const ProfileMoviesCount = styled.ul` 
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

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