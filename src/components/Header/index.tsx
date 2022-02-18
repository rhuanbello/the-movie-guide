import { Container, SearchedOptions, StyledAutocomplete, StyledMenu, StyledMenuButton, StyledMenuItem, StyledTextField } from './styles';
import Logo from '../../assets/logo.svg';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import { resultsTypes, searchedMovies } from './interfaces';
import { searchApi } from '../../services/api';
import Skeleton from '@mui/material/Skeleton';
import { Box } from '@mui/system';

export const Header = () => {
  const navigate = useNavigate();
  const [dropDown, setDropDown] = useState('');
  const onClose = () => setDropDown('');
  const { VITE_API_KEY } = import.meta.env;
  const [searchedTerm, setSearchedTerm] = useState<string>('Vingadores');
  const [searchedMovies, setSearchedMovies] = useState<searchedMovies[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);

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

  const getSearchedTerm = (searchedTerm: string) => {
    searchApi
      .get(`multi?api_key=${VITE_API_KEY}&language=pt-BR&page=1&query=${searchedTerm}`)
      .then(({ data }) => {
        console.log('data', data)
        const { results } = data;
        handleSearchedTerm(results);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleSearchedTerm = (results: Array<resultsTypes>) => {
    console.log('Results', results);

    const moviesAndPeople = [...results].filter(content => content.media_type !== 'tv' 
                                                        && content.backdrop_path !== null 
                                                        && content.profile_path !== null)

    const peopleList = [...moviesAndPeople].filter(content => content.media_type === 'person')
                            .map(({ id, name, popularity, profile_path, media_type }) => 
                              ({ poster_path: profile_path, title: name, id, popularity, media_type }));

    const moviesList = [...moviesAndPeople].filter(content => content.media_type === 'movie')
      .map(({ popularity, poster_path, release_date, title, vote_average, id, media_type }) => 
        ({ popularity, poster_path, release_date, title, vote_average, id, media_type }))

    const filteredResults = [...moviesList, ...peopleList];

    console.log(filteredResults);
    setSearchedMovies(filteredResults);

    setTimeout(() => {
      setSearchLoading(false);
    }, 800)

  }

  const handleLoadingState = (searchedTerm) => {
    searchedTerm ? setSearchLoading(true) : setSearchLoading(false);
  }

  useEffect(() => {
    getSearchedTerm(searchedTerm);
    handleLoadingState(searchedTerm)
  }, [searchedTerm])

  const handleNavigate = (menuButton: string, menuItem: string) => {

    if (menuButton === 'People') {
      navigate('/person/popular')

      return;
    } 

    switch (menuItem) {
      case 'Popular':
        navigate('/')
        break;
      case 'Top Rated':
        navigate('/top-rated')
        break;
      case 'Now Playing':
        navigate('/now-playing')
        break;
      case 'My Profile':
        navigate('/profile')
        break;
      default:
        navigate('/');
    }

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
                    handleNavigate(menuButton, item)
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
          clearOnEscape
          freeSolo
          noOptionsText={'Nenhum título encontrado.'}
          groupBy={({ media_type }) => media_type === 'movie' ? 'Filmes' : 'Pessoas'}
          options={searchedMovies.sort((a, b) => b.popularity - a.popularity)}
          getOptionLabel={(item: searchedMovies | any) => item.title}
          renderInput={(params) => (
            <StyledTextField {...params}
              size="small" 
              placeholder='Search a title or a person...'
              onChange={(e) => setSearchedTerm(e.target.value)}
              InputProps={{
                ...params.InputProps,
                style: {
                  color: 'var(--grey)',
                  fontFamily: 'DM Sans',
                  fontSize: 14
                },
                endAdornment: (
                  <>
                    {searchLoading ? 
                      <CircularProgress 
                        size={16}
                        sx={{ 
                          color: "var(--primary)", 
                          marginRight: 4 
                        }}  
                      /> 
                      : null}
                    {params.InputProps.endAdornment}
                  </>
                )}}
              />
          )}
          renderOption={(props, {title, vote_average, release_date, poster_path}: searchedMovies | any) => (
            <SearchedOptions {...props} voteAverage={vote_average}>
                  <>
                    {searchLoading ? (
                      <Skeleton variant="rectangular" width="15%" height="60px" animation="wave" sx={{
                        borderRadius: '5px',
                        marginLeft: '5px',
                        padding: '5px'
                      }}/>
                    ) : (
                      <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="" />
                    )}
                    {searchLoading ? (
                      <Skeleton variant="text" height="40px" width="100%" animation="wave" />
                    ) : (
                      <>
                      <span>{title}</span>
                      <span>{vote_average && vote_average?.toString()?.replace('.', '') + '%'}</span>
                      <span>{release_date?.split('-')[0] || ''}</span>
                      </>
                    )}
                  </>
            </SearchedOptions>
          )}
          onChange={(e, {media_type, id}: any) => {
            navigate(`/${media_type}/${id}`)
          }}
        />
      </div>
      
    </Container>
  );
}

