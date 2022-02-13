import { useNavigate } from "react-router-dom";

import { genresBannerProps } from './interfaces';

import { MdCancel } from "react-icons/md";
import TextField from '@mui/material/TextField';

import { 
  ButtonContainer, 
  Container, 
  GenreButton, 
} from './styles';
import { searchedMovies } from "../../pages/Home/interfaces";
import { useState } from "react";

export const GenresBanner = ({ 
  genres, 
  selectedGenres, 
  setSelectedGenres, 
  setSearchedTerm, 
  searchedMovies,
  backDrop
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
    <Container backDrop={backDrop}>

      <div>
        <h1>Track films you've watched. Discover millions of movies.
          Explore now.</h1>
        <div>
          <p>FILTER BY:</p>
          <ButtonContainer>
            {genres.map((genre) => (
              <GenreButton
                key={genre.id}
                style={{
                  backgroundColor: selectedGenres.some(g => g === genre.id) ? 'var(--primary)' : 'var(--light)',
                  color: 'var(--dark)',
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
        </div>
      </div>

    </Container>
  );
}

