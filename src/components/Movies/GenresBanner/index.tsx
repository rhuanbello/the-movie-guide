import { genresBannerProps } from './interfaces';

import { MdCancel } from "react-icons/md";

import { 
  ButtonContainer, 
  Container, 
  GenreButton, 
} from './styles';

import { useSelector } from "react-redux";
import { DefaultRootState } from "../../../services/store/modules/Home/interfaces";

export const GenresBanner = ({ selectedGenres, setSelectedGenres }: genresBannerProps) => {
  const { moviesGenres } = useSelector((state): DefaultRootState => state);

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

  const imageBaseURL = 'https://www.themoviedb.org/t/p/'
  const cover = '/tNE9HGcFOH8EpCmzO7XCYwqguI0.jpg'
  const backdropCover = imageBaseURL + 'original' + cover;

  return (
    <Container backDrop={backdropCover}>
      <div>
        <h1>Milhões de Filmes e Pessoas para Descobrir. Explore já.</h1>
        <div>
          <p>FILTRE POR:</p>
          <ButtonContainer>
            {moviesGenres.map(({ id, name }) => (
              <GenreButton
                key={id}
                style={{
                  backgroundColor: selectedGenres.some(selectedGenre => selectedGenre === id) ? 
                                    'var(--primary)' : 
                                    'var(--light)'
                }}
                onClick={() => {
                  handleSelectedGenres(id);
                }}
              >
                {name}
                
                {selectedGenres.some(selectedGenre => selectedGenre === id) && (
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

