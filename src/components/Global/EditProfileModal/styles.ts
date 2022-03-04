import styled from 'styled-components'; 


export const Container = styled.main`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  
`

interface ContentProps {
  profileChanged: boolean;

}

export const Content = styled.div<ContentProps>`
  background: var(--dark);
  margin: 0 auto;
  height: 80%;
  width: 50%;
  border-radius: 20px;
  /* overflow-y: scroll; */

  header {
    position: sticky;
    top: 0;
    background: var(--dark);
    display: flex;
    width: 100%;
    padding: 15px;
    align-items: center;
    gap: 20px;

    h3 {
      font-size: 18px;


    }

    button {
      border: none;
      background: var(--dark);
      display: inline-block;

      &:first-of-type {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        font-size: 24px;
        border-radius: 50%;
        transition: .2s;

        &:hover {
          color: var(--primary);
          background: var(--contrast);

        }

      }

      &:last-of-type {
        margin-left: auto;
        background: ${({ profileChanged }) => profileChanged ? 'var(--primary)' : 'var(--light)'} ;
        color: var(--contrast);
        font-weight: 500;
        padding: 7px 30px;
        border-radius: 10px;
        font-size: 14px;
        opacity: ${({ profileChanged }) => !profileChanged && '0.4'};
        cursor: ${({ profileChanged }) => !profileChanged && 'not-allowed'};

      }

    }

  }


`