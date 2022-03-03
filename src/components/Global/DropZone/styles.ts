import styled from 'styled-components'; 

export const ProfileImage = styled.div`
  background-color: var(--dark);
  border-radius: 50%;
  outline: 3px solid var(--primary);
  width: 200px;
  height: 200px;
  cursor: pointer;

  & > div {
    position: relative;

    & > img {
      transition: .2s;
      object-fit: cover;

    }

    & > div {
      opacity: 0;
      display: grid;
      place-items: center;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      transition: .2s;

        p {
          font-size: 12px;
          color: var(--light);
        }

      }

  }

  &:hover {
    
    & > div {
      & > img {
        filter: brightness(.4);
      }
      & > div {
        opacity: 1;
      }
    }

  }



`

