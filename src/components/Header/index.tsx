import { Container, SearchedOptions, StyledAutocomplete, StyledMenu, StyledMenuButton, StyledMenuItem, StyledTextField } from './styles';
import Logo from '../../assets/logo.svg';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { resultsTypes, searchedMovies } from './interfaces';
import { searchApi } from '../../services/api';

export const Header = () => {
  const navigate = useNavigate();
  const [dropDown, setDropDown] = useState('');
  const onClose = () => setDropDown('');
  const { VITE_API_KEY } = import.meta.env;

  const menuItems = [
    { 
      menuButton: 'Movies',
      menuItems: ['Popular', 'Top Rated', 'Now Playing'] 
    }, 
    { 
      menuButton: 'People',
      menuItems: ['Popular'] 
    }, 
    { 
      menuButton: 'Profile',
      menuItems: ['My Profile'] 
    }
  ];

  const [searchedTerm, setSearchedTerm] = useState<string>('avengers');
  const [searchedMovies, setSearchedMovies] = useState<searchedMovies[]>([]);

  useEffect(() => {
    console.log('searchedMovies', searchedMovies)
  }, [searchedMovies])

  useEffect(() => {
    getSearchedMovies(searchedTerm)
  }, [searchedTerm])

  const getSearchedMovies = (searchedTerm: string) => {
    searchApi
      .get(`movie?api_key=${VITE_API_KEY}&language=pt-BR&page=1&query=${searchedTerm}`)
      .then(({ data }) => {
        const { results } = data;
        handleSearchedMovies(results)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleSearchedMovies = (results: Array<resultsTypes>) => {
    console.log('Results', results)
    const propertiesFilter = [...results].map(({ backdrop_path, popularity, poster_path, release_date, title, vote_average, id }) => ({ backdrop_path, popularity, poster_path, release_date, title, vote_average, id }))
    const filteredResults = [...propertiesFilter]?.filter(x => x.backdrop_path !== null);
    setSearchedMovies(filteredResults);
  }

  return (
    <Container>
      <div>
        <img src={Logo} onClick={() => navigate('/')} />
        <nav>

          {menuItems.map(({ menuButton }) => (
            <StyledMenuButton
              onClick={(e) => {
                setDropDown(e.currentTarget)
              }}
            >
              {menuButton}
            </StyledMenuButton>
          ))}

          {menuItems.map(({ menuItems, menuButton }) => (

            <StyledMenu
              anchorEl={dropDown}
              open={menuButton === dropDown.innerText}
              onClose={onClose}
            >
              {menuItems.map(item => (

                <StyledMenuItem
                  onClick={() => {
                    onClose();
                  }}
                >
                  {item}
                </StyledMenuItem>

              ))}
            </StyledMenu>

          ))}

        </nav>
        <StyledAutocomplete
          disablePortal
          freeSolo
          clearOnEscape
          options={searchedMovies.sort((a, b) => b.popularity - a.popularity)}
          noOptionsText={'Nenhum título encontrado.'}
          getOptionLabel={(item: searchedMovies | any) => item.title}
          renderOption={(props, item: searchedMovies | any) => (
            <SearchedOptions {...props} voteAverage={item.vote_average}>
              <img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} alt="" />
              <span>{item?.title}</span>
              <span>{item?.vote_average?.toString()?.replace('.', '')}%</span>
              <span>{item?.release_date?.split('-')[0]}</span>
            </SearchedOptions>
          )}
          renderInput={(params) => (
            <StyledTextField {...params}
              InputProps={{
                style: { 
                  color: 'var(--grey)',
                  fontFamily: 'DM Sans',
                },
              }}
              placeholder='Search a title...'
              onChange={(e) => {
                setSearchedTerm(e.target.value)
              }}
            />
          )}
          onChange={(e, item: any) => {
            navigate(`/movie/${item.id}`)
          }}
        />
      </div>
      
    </Container>
  );
}

