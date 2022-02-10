import styled from "styled-components";

export const Container = styled.main`
  min-height: 90vh;
  display: flex;
  align-items: center;

  article {
    margin-inline: auto 80px;


    h2 {
      font-weight: normal;
      font-size: 64px;

    }

    p {
      font-size: 48px;
      color: var(--text-dark-contrast);
      font-weight: 300;
      margin-block: 10px 20px;

    }

    button {
      border: none;
      background: none;
      padding: 15px 20px;
      background-color: var(--secondary);
      color: var(--text-light);
      border-radius: 5px;
      display: inline-block;


    }

  }

  & > div {
     margin-inline: 80px auto;

    img {
      width: 400px;

    }

  }

`