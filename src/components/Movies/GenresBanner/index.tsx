import { genresBannerProps } from './interfaces';

import { MdCancel } from "react-icons/md";

import { 
  ButtonContainer, 
  Container, 
  GenreButton, 
} from './styles';

import { useSelector } from "react-redux";
import { DefaultRootState } from "../../../services/store/modules/Home/interfaces";

export const GenresBanner = ({ 
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

  const { moviesGenres } = useSelector((state): DefaultRootState => state)

  return (
    <Container backDrop={backDrop}>

      <div>
        <h1>Milhões de Filmes e Pessoas para Descobrir. Explore já.</h1>
        <div>
          <p>FILTRE POR:</p>
          <ButtonContainer>
            {moviesGenres.map((genre) => (
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

