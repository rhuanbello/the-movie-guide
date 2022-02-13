import { Button, Menu, MenuItem, popoverClasses } from '@mui/material';
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
  overflow: hidden;
  outline: 3px solid transparent;
  border-radius: 3px;
  margin-bottom: 5px;
  transition: .3s;

  &:hover {
    outline-color: var(--primary);

    &&& button {
      opacity: 1;

    }

    img {
      filter: brightness(0.8);
      transform: scale(1.15);

    }
  }


  img {
    width: 100%;
    cursor: pointer;
    transition: .3s;

    @media(max-width: 500px) {
      width: 35vw;
      
    }
  
  }

`

export const Dropdown = styled(Menu)`
  &&& {
    margin-top: 5px;

    .${popoverClasses.paper} {
      background-color: var(--dark);
      border-radius: 5px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    }

  }
`

export const MovieAction = styled(MenuItem)`
  &&& {
    background-color: var(--dark);
    margin: 0;
    color: #F9F9F9;
    font-size: 14px;
    font-weight: 500;
    font-family: 'DM Sans', sans-serif;
    padding-inline: 25px;

    &:hover {
      background-color: var(--contrast);

    }

  }
`

export const DetailsButton = styled(Button)`
  &&& {
    position: absolute;
    top: 7px;
    right: 7px;
    padding: 3px;
    background: var(--dark);
    border-radius: 50%;
    min-width: 0;
    opacity: 0;

    &&& .focusVisible  {
      opacity: 1;

    }

  }
  

`