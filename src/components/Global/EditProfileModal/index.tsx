
import { Modal, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { handleProfileEditedInfos } from '../../../services/store/modules/Global/actions';
import { DropZone } from '../DropZone';
import { Container, Content, HeaderModal, MainModal, SectionModal } from './styles';
import DefaultProfileImage from '../../../assets/me-myself-and-irene.jpeg';
import DefaultProfileCover from '../../../assets/the-perks-of-being-wallflower.jpg';

export const EditProfileModal = ({ 
  openModal, 
  handleModalState, 
  profileEditedInfos 
}) => {
  const dispatch = useDispatch()
  const { usersProfileImagesObj } = useSelector((state) => state);
  const { profileImage, profileCover } = usersProfileImagesObj;
  const [ profileNameBio, setProfileNameBio ] = useState({
    profileName: '',
    profileBio: '',
    profileUsername: ''
  });

  const { profileName, profileBio, profileUsername } = profileNameBio;
  
  useEffect(() => {

    console.log('profileImage', profileImage)

    const { profileName, profileBio, profileUsername } = profileEditedInfos;
    if (profileName && profileBio && profileUsername) {
      setProfileNameBio({
        profileName: profileName,
        profileBio: profileBio,
        profileUsername: profileUsername
      })
    }
  }, []);

  const handleProfileNameBio = (value, type) => {
    const tempProfileNameBio = { ...profileNameBio };
    tempProfileNameBio[type] = value;
    setProfileNameBio(tempProfileNameBio);
  }
  
  const handleIsProfileChanged = () => {
    const profileNameBioChanged = Object.values(profileNameBio)?.every(x => x?.length > 0);
    const usersProfileImagesObjChanged = Object.values(usersProfileImagesObj)?.every(x => x?.preview?.length > 0);
    return profileNameBioChanged && usersProfileImagesObjChanged;

  }

  return (
    <Modal
      open={openModal}
      onClose={handleModalState}
    >
      <Container>
        <Content>
          <HeaderModal profileChanged={handleIsProfileChanged()}>
            <button
              onClick={handleModalState}
            >
              <AiOutlineClose />
            </button>
            <h3>
              Editar Perfil
            </h3>
            <button
              onClick={() => {
                if (handleIsProfileChanged()) {
                  dispatch(handleProfileEditedInfos(profileNameBio, usersProfileImagesObj));
                }
                handleModalState();
              }}
            >
              Salvar
            </button>
          </HeaderModal>
          <SectionModal>
            <div className="ProfileCover">
              <DropZone
                imageToRender={profileCover.preview || DefaultProfileCover}
                imageType="profileCover"
                onErrorImg={'https://1.bp.blogspot.com/-uUTfELqzsz4/YBStkz1UOcI/AAAAAAAB-74/2FV9QAYJ1yIaBwoUlqLIwjFGmi_WNpxNQCLcBGAsYHQ/w640-h360/Garota-Exemplar-1920-1080-Ru%25C3%25ADdo-Exemplar.jpg'}
                width="100%"
              />
            </div>
            <div className="ProfileImage">
              <DropZone 
                imageToRender={profileImage.preview || DefaultProfileImage}
                imageType="profileImage"
                onErrorImg={'https://s.ltrbxd.com/static/img/avatar300.17f1d3b7.png'}
                rounded
                outlined
              />
            </div>
          </SectionModal>
          <MainModal>
            <TextField 
              color="success"
              label="Nome"
              defaultValue={profileName}
              fullWidth 
              focused
              autoFocus
              onChange={(e) => handleProfileNameBio(e.target.value, 'profileName')}
              inputProps={{
                maxLength: 25,
              }}
            />
            
            <TextField
              color="success"
              label="Nome de Usuário"
              defaultValue={profileUsername}
              fullWidth
              focused
              onChange={(e) => handleProfileNameBio(e.target.value, 'profileUsername')}
              inputProps={{
                maxLength: 15,
              }}
            />

            <TextField 
              color="success"
              label="Bio"
              defaultValue={profileBio}
              fullWidth 
              focused
              onChange={(e) => handleProfileNameBio(e.target.value, 'profileBio')}
              inputProps={{
                maxLength: 65,
              }}
            />
            
          </MainModal>
        </Content>
      </Container>
    </Modal>
  )

}