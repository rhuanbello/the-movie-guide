import { useState } from "react";
import { useSelector } from "react-redux";

import { DefaultRootState } from "../../services/store/interfaces";

import { MoviesList } from "../../components/Movies/MoviesList";
import { EditProfileModal } from '../../components/Global/EditProfileModal';

import { 
  Container, 
  Cover,
  MoviesSection,
  ProfileDetails,
  ProfileHeader,
  ProfileMoviesCount,
  ProfileSection
} from './styles';

export default function MyProfile() {
  const [ openModal, setOpenModal ] = useState(false);

  const { addedMoviesObj, profileEditedInfos } = useSelector((state): DefaultRootState => state);
  const { watchedMovies, favoriteMovies } = addedMoviesObj;
  const {
    profileName,
    profileBio,
    profileUsername,
    usersProfileImagesObj
  } = profileEditedInfos;
  const { profileImage, profileCover } = usersProfileImagesObj;

  const handleModalState = () => setOpenModal(!openModal);

  const handleThisYearMoviesWatched = (watchedMovies) => {
    const thisYearCount = [...watchedMovies]?.filter(
      (movie) =>
        new Date(movie.createdAt).getFullYear() === new Date().getFullYear()
    ).length;

    return thisYearCount;

  }

  return (
    <Container>
      <Cover
        backdrop={profileCover?.base64}
      >
        <ProfileHeader>
          <ProfileDetails>
            <img 
              draggable={false}
              src={profileImage?.base64}
            />
            <div>
              <h2>{profileName}</h2>
              <p>{profileUsername.includes('@') ? profileUsername : '@' + profileUsername}</p>
              <p>{profileBio}</p>
            </div>
          </ProfileDetails>
          <ProfileSection>
            <ProfileMoviesCount>
              <li>
                <p>{watchedMovies?.length}</p>
                <span>Já vi</span>
              </li>
              <li>
                <p>{handleThisYearMoviesWatched(watchedMovies)}</p>
                <span>Neste ano</span>
              </li>
              <li>
                <p>{favoriteMovies?.length}</p>
                <span>Favoritos</span>
              </li>
            </ProfileMoviesCount>
            <button
              onClick={handleModalState}  
            >
              Editar Perfil
            </button>
            <EditProfileModal 
              openModal={openModal}
              handleModalState={handleModalState}
              profileEditedInfos={profileEditedInfos}
            />
          </ProfileSection>
        </ProfileHeader>
      </Cover>

      {favoriteMovies.length > 0 && (
        <MoviesSection>
          <h3>Filmes favoritos</h3>

          <MoviesList 
            moviesToRender={favoriteMovies}
            isRecommendation={true}
            isProfile={true}
          />

        </MoviesSection>
      )}

      {watchedMovies.length > 0 && (
        <MoviesSection>
          <h3>Assisti Recentemente</h3>

          <MoviesList 
            moviesToRender={watchedMovies} 
            isProfile={true}
          />

        </MoviesSection>
      )}

      {favoriteMovies.length <= 0 && watchedMovies.length <= 0 && (
        <MoviesSection>
          <h3>Ops... não há nada por aqui.</h3>
        </MoviesSection>
      )}
  
        
    </Container>
  );
}


