import styled from 'styled-components'; 


export const Container = styled.main`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  backdrop-filter: blur(2px);
  transition: .2s;
  
`

export const Content = styled.div`
  background: var(--dark);
  margin: 0 auto;
  min-height: 85vh;
  min-width: 50vw;
  border-radius: 20px;
  transition: .2s;

  @media (max-width: 1100px) {
    min-width: 70vw;

  }


`
interface ContentProps {
  profileChanged: boolean;

}

export const HeaderModal = styled.header<ContentProps>`
  position: sticky;
  top: 0;
  display: flex;
  width: 100%;
  padding: 10px 15px;
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

`
export const SectionModal = styled.section`
  display: flex;
  flex-direction: column;
  height: calc(400px - 80px);

  .dropzone {
    width: 100%;
    height: 100%;

  }
  
  div.ProfileImage {
    position: relative;
    z-index: 5;
    top: -80px;
    left: 25px;
    width: 200px;

  }


`

export const MainModal = styled.main`
  margin-top: 15px;
  padding: 25px;
  display: grid;
  gap: 30px;

  input {
    color: white;
  }



`

