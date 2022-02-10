import { Container, PageButton } from './styles';
import {  FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export const Pagination = () => {
  const pageObj = [
    {
      label: <FiChevronLeft 
              style={{
                fontSize: '20px',
              }} 
             />,
      value: -1,
    },
    {
      label: 1,
      value: 1,
    },
    {
      label: 2,
      value: 2
    },
    {
      label: 3,
      value: 3
    },
    {
      label: 4,
      value: 4
    },
    {
      label: 5,
      value: 5,
    },
    {
      label: <FiChevronRight 
              style={{
                fontSize: '20px',
              }}
             />,
      value: 0,
    },
    {
      label: 'Última',
      value: 500
    },
  ]
  const navigate = useNavigate();
  const actualPage = useParams();
  const page = Number(actualPage.page);

  const handlePagination = (value: number) => {
    let pageNumber = value;

    if (Number.isNaN(page)) pageNumber = 2;
    if (pageNumber === 0) pageNumber = page + 1;
    if (pageNumber === -1) pageNumber = page - 1;

    navigate(`/page/${pageNumber}`);

  }

  const handleDisabledButtons = (label: any) => {
    return (
      page === 500 && (label?.type?.name === 'FiChevronRight' || label === 'Última')
    )
  }

  useEffect(() => {
    scrollToTop();
  }, [page])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Container>
      {pageObj.map(({ label, value }, index) => (
        <PageButton
          disabled={handleDisabledButtons(label)}
          key={index}
          onClick={() => {
            if (value === 1 || (value === -1 && page === 2)) {
              navigate('/')
            } else {
              handlePagination(value);
            }
          }}
          value={value}
          page={page}
        >
          {label}
        </PageButton>
      ))}
    </Container>
  );
}

