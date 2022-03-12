import { Container, PageButton } from './styles';
import {  FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useNavigate, useParams, useLocation } from 'react-router-dom';

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
  const { pathname } = useLocation();
  const actualPage = useParams();
  const page = Number(actualPage.page);

  const handlePagination = (value: number, label) => {
    let pageNumber = value;

    if (Number.isNaN(page) && isNaN(label) && typeof label !== 'string') pageNumber = 2
    if (pageNumber === 0) pageNumber = page + 1;
    if (pageNumber === -1) pageNumber = page - 1;

    if (pathname.includes('top-rated')) {
      navigate(`/top-rated/page/${pageNumber}`);
    } else if (pathname.includes('now-playing')) {
      navigate(`/now-playing/page/${pageNumber}`);
    } else if (pathname.includes('upcoming')) {
      navigate(`/upcoming/page/${pageNumber}`);
    } else if (pathname.includes('person')) {
      navigate(`/person/popular/page/${pageNumber}`);
    } else {
      navigate(`/page/${pageNumber}`);
    }

  }

  const handlePageRoot = () => {
    if (pathname.includes('top-rated')) {
      navigate(`/top-rated`);
    } else if (pathname.includes('now-playing')) {
      navigate(`/now-playing`);
    } else if (pathname.includes('upcoming')) {
      navigate(`/upcoming`);
    } else if (pathname.includes('person')) {
      navigate(`/person/popular`);
    } else {
      navigate(`/`);
    }

  }

  const handleDisabledButtons = (label: any) => {
    return (
      page === 500 && (label?.type?.name === 'FiChevronRight' || label === 'Última')
    )
  }

return (
  <Container>
    {pageObj.map(({ label, value }, index) => (
      <PageButton
        disabled={handleDisabledButtons(label)}
        key={index}
        onClick={(e) => {
          if (value === -1 && Number.isNaN(page)) {
            e.preventDefault();
          } else if (value === 1 || (value === -1 && page === 2)) {
            handlePageRoot()
          } else {
            handlePagination(value, label);
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

