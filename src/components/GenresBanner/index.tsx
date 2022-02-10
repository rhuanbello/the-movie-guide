import { useNavigate } from "react-router-dom";

import { genresBannerProps } from './interfaces';

import { MdCancel } from "react-icons/md";
import TextField from '@mui/material/TextField';

import { 
  ButtonContainer, 
  Container, 
  GenreButton, 
  SearchedOptions, 
  StyledAutocomplete
} from './styles';
import { searchedMovies } from "../../pages/Home/interfaces";

export const GenresBanner = ({ 
  genres, 
  selectedGenres, 
  setSelectedGenres, 
  setSearchedTerm, 
  searchedMovies 
}: genresBannerProps) => {

  const handleSelectedGenres = (id: number) => {
    const filteredSelectedGenres = [...selectedGenres];
    const genreIndex = selectedGenres.findIndex(x => x === id);

    if (genreIndex === -1) {
      filteredSelectedGenres.push(id);
    
    } else {
      filteredSelectedGenres.splice(genreIndex, 1);
  
    }

    localStorage.setItem('Genres', JSON.stringify(filteredSelectedGenres))
    setSelectedGenres(filteredSelectedGenres);
  }

  const navigate = useNavigate();

  return (
    <Container>

      <div>
        <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
        <div>
          <p>FILTRE POR:</p>
          <ButtonContainer>
            {genres.map((genre) => (
              <GenreButton
                key={genre.id}
                style={{
                  backgroundColor: selectedGenres.some(g => g === genre.id) ? 'var(--orange)' : 'var(--text-light)',
                  color: selectedGenres.some(g => g === genre.id) ? 'var(--text-light)' : 'var(--text-dark)',
                }}
                onClick={() => {
                  handleSelectedGenres(genre.id);
                }}
              >
                {genre.name}
                
                {selectedGenres.some(selectedGenre => selectedGenre === genre.id) && (
                  <MdCancel
                    size={18}
                  />
                )}
              </GenreButton>
            ))}

          </ButtonContainer>
          <p>OU BUSQUE POR:</p>
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
              <TextField {...params} 
                placeholder='Pesquise um título...'
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
      </div>

    </Container>
  );
}

