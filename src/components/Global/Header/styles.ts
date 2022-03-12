import { Button, Menu, MenuItem, Autocomplete, TextField } from '@mui/material';
import styled from 'styled-components'; 
import { popoverClasses } from "@mui/material/Popover";

export const Container = styled.header`
  background-color: var(--dark);

  div {
      max-width: 85vw;
      margin: 0 auto;
      display: flex;
      align-items: center;
      
      @media(max-width: 950px) {
        flex-wrap: wrap;
        
      }

    img {
      cursor: pointer;

       @media(max-width: 610px) {
        margin: 15px auto 0 auto;

      }

    }

    & > nav {
      display: flex;
      gap: 15px;
      margin-inline: auto 40px;
      padding: 20px 0;

      @media(max-width: 950px) {
        margin-inline: auto 0;

      }

      @media(max-width: 610px) {
        margin-inline: auto;

      }
  


    }
  }

`

export const StyledMenuButton = styled(Button)`
  &&& {
    color: var(--primary);
    text-transform: none;
    font-size: 16px;
    font-weight: 500;
    line-height: 23px;
    font-family: 'DM Sans', sans-serif;

    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      width: 0%;
      height: 1px;
      background-color: currentcolor;
      opacity: 0;
      transition: all .35s ease;

    }

    &:hover {
      &::after {
        opacity: 1;
        width: 100%;

      }

    }


  }
  

`

export const StyledMenu = styled(Menu)`
  &&& {
    .${popoverClasses.paper} {
      background-color: var(--dark);
      border-radius: 3px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    }

  }
`

export const StyledMenuItem = styled(MenuItem)`
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

export const StyledAutocomplete = styled(Autocomplete)`
  &&& {
    width: 25vw;
    background-color: var(--light);
    border: none;
    border-radius: 5px;
    outline: transparent;
    margin: 0;
    

    @media(max-width: 950px) {
      width: 90vw;
      margin-bottom: 25px;

    }

  }
 
`;

export const StyledTextField = styled(TextField)`

  & label.Mui-focused {
    outline: none;

    &:hover {
        outline: none;
      
    }

  }

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: transparent;
    }

  }
`;

interface SearchedOptionsProps {
  voteAverage: number;

}

export const SearchedOptions = styled.li<SearchedOptionsProps>`
  display: flex;
  gap: 15px;
  align-items: center;
  font-weight: bold;
  font-size: 12px;

  &&&:hover {
    background: var(--light);
  }

  img {
    width: 50px;
    padding: 5px;
    border-radius: 10px;

  }

  span {
    &:first-of-type {
      margin-right: auto;

    }

    &:nth-of-type(2) {
      color: ${({ voteAverage }) => (
        Number(voteAverage) >= 7 ? 'var(--primary)' : 
        Number(voteAverage) >= 5 ? '#FFC300' : '#FF5733'
      )}

    }

  }

`
