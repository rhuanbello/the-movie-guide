import { Autocomplete } from '@mui/material';
import styled from 'styled-components'; 

export const Container = styled.section`
  background: var(--primary);

  & > div {
    padding-block: 85px 45px;
    max-width: 70vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    @media(max-width: 450px) {
      max-width: 95vw;
      
    }

    h1 {
      text-align: center;
      width: 781px;
      color: var(--text-light);
      font-size: 48px;

      @media(max-width: 850px) {
        width: 90vw;

      }

      @media(max-width:  450px) {
        font-size: 32px;
        text-align: left;

      }
  
    }

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 25px;

      p {
        color: #FFF;
        font-size: 14px;
        font-weight: 700;
        
        @media(max-width: 450px) {
          margin-inline: 10px auto;
          
        }
      
      }

    }
  }

`

export const StyledAutocomplete = styled(Autocomplete)`

  .MuiAutocomplete-inputRoot {
    width: 700px;
    background-color: #FFF;
    border-radius: 5px;
    
    @media(max-width: 850px) {
      width: 90vw;

    }

  }

`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;

  @media(max-width: 450px) {
    justify-content: left;
    margin-left: 10px;

  }

`

export const GenreButton = styled.button`
  display: flex;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  align-items: center;
  gap: 5px;

`

interface SearchedOptionsProps {
  voteAverage: number;

}

export const SearchedOptions = styled.li<SearchedOptionsProps>`
  display: flex;
  gap: 15px;
  align-items: center;
  font-weight: bold;
  width: 100%;

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
        Number(voteAverage) > 7 ? 'green' : 'red'
      )}

    }

  }


`
