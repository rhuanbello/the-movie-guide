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

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85vw;
    margin: 0 auto;
    padding: 50px 0;

    & > div {
      display: flex;
      gap: 30px;
      align-items: center;
      width: 30vw;

      img {
        border-radius: 50%;
        width: 200px;
        aspect-ratio: 1;

      }

      p {
        margin: 10px 0;

      }


    }

    ul {
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