import { Autocomplete } from '@mui/material';
import styled from 'styled-components'; 

interface ContainerProps {
  backDrop: string;

}

export const Container = styled.section<ContainerProps>`
  /* background: ${({backDrop}) => `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0 ,0, 0, 0.5)), url(${backDrop}) no-repeat center center`}; */
  background: ${({ backDrop }) => `linear-gradient(0deg, rgba(44, 52, 64, 0.7), rgba(44, 52, 64, 0.7)), radial-gradient(100% 576% at 0% 50%, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.18) 50%, rgba(0, 0, 0, 0.6) 100%), url(${backDrop}) no-repeat center center`};
  background-size: cover;
 

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
      color: var(--light);
      font-size: 46px;

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
  color: var(--dark);

`
