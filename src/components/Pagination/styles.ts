import styled from 'styled-components'; 

export const Container = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;  
  padding: 80px 0;
  align-items: center;
  width: 95vw;

  @media(max-width: 500px) {
    padding-block: 0 40px;
    
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
  color: var(--secondary);
  width: 40px;
  aspect-ratio: 1;
  font-size: 16px;
  font-weight: 700;
  border-radius: 50%;
  transition: .2s ease-in-out;
  opacity: ${({ page, value }) => (value === -1 && Number.isNaN(page)) ? '0' : '1'};

  &:hover {
    background-color: ${({ value }) => (value >= 1 && value <= 5) && 'var(--primary)'};
    color: ${({ value }) => (value >= 1 && value <= 5) && 'var(--text-light)'};

  }

  


`


