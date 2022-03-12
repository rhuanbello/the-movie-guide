import styled from 'styled-components'; 

export const Container = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;  
  padding: 80px 0;
  align-items: center;

  @media(max-width: 500px) {
    padding-block: 0 40px;
    flex-wrap: wrap;


  }

`
interface PageButtonsProps {
  value: number;
  page: any;

}

export const PageButton = styled.button<PageButtonsProps>`
  border: none;
  background: none;
  display: grid;
  place-items: center;
  color: var(--primary);
  aspect-ratio: 1;
  font-size: 14px;
  font-weight: 700;
  border-radius: 50%;
  transition: .2s ease-in-out;
  display: ${({ page, value }) => (value === -1 && Number.isNaN(page)) ? 'none' : 'grid'};
  cursor: ${({ page, value }) => (value === -1 && Number.isNaN(page)) && 'default'};

  &:hover {
    background-color: ${({ value }) => (value >= 1 && value <= 5) && 'var(--primary)'};
    color: ${({ value }) => (value >= 1 && value <= 5) && 'var(--dark)'};

  }
  
  &:not(:last-child) {
    width: 30px;

  }


`


