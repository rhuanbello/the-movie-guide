import styled from 'styled-components'; 

export const Movie = styled.li`
  font-weight: 700; 
  font-size: 16px;
  line-height: 24px;

  p:first-of-type {
    max-width: 500px;
  
  }

  p:last-child {
    font-size: 14px;
    font-weight: 400;

  }

`

export const PosterContainer = styled.div`
  position: relative;
  width: 100%;


  img {
    border-radius: 4px;
    transition: .3s;
    width: 100%;
    cursor: pointer;
    outline: 3px solid transparent;
    outline-offset: -4px;

    &:hover {
      filter: brightness(0.8);
      outline-color: var(--primary);

    }

    @media(max-width: 500px) {
      width: 35vw;
      
    }
  
  }

`

export const MovieOptions = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background: red;
  padding: 10px;

`

export const ModalRateStars = styled.div`
  padding: 50px;
  border-radius: 5px;
  /* background-color: #000; */
  position: absolute;
  left: 0;
  top: 0;

  &::after {
    content: '';
    position: absolute;
    left: -15px;
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 15px 10px 0;
    border-color: transparent #000 transparent transparent;

  }

`