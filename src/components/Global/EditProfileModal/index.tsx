
import { Modal, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { DefaultRootState } from '../../../services/store/interfaces';
import { handleProfileEditedInfos } from '../../../services/store/modules/MyProfile/actions';
import { DropZone } from '../DropZone';
import { Container, Content, HeaderModal, MainModal, SectionModal } from './styles';

export const EditProfileModal = ({
  openModal,
  handleModalState,
  profileEditedInfos
}) => {
  const dispatch = useDispatch()
  const { usersProfileImagesObj } = useSelector((state): DefaultRootState => state);
  const { profileImage, profileCover } = usersProfileImagesObj;
  const [profileNameBio, setProfileNameBio] = useState({
    profileName: '',
    profileBio: '',
    profileUsername: ''
  });

  const { profileName, profileBio, profileUsername } = profileNameBio;

  useEffect(() => {
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
    const profileNameBioChanged = Object?.values(profileNameBio)?.every(x => x?.length > 0);
    //@ts-ignore
    const usersProfileImagesObjChanged = Object?.values(usersProfileImagesObj)?.every((x): any => x?.preview?.length > 0);
    return profileNameBioChanged && usersProfileImagesObjChanged;

  }

  const handleInputColor = (value) => (
    value.length > 0 ? 'success' : 'error'
  )

  return (
    <Modal
      open={openModal}
      onClose={handleModalState}
    >
      <Container>
        <Content>
          <HeaderModal profileChanged={handleIsProfileChanged()}>
            <button
              onClick={() => {
                handleModalState();
              }}
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
                  handleModalState();
                }
              }}
            >
              Salvar
            </button>
          </HeaderModal>
          <SectionModal>
            <div className="ProfileCover">
              <DropZone
                imageToRender={profileCover.base64}
                imageType="profileCover"
                width="100%"
              />
            </div>
            <div className="ProfileImage">
              <DropZone
                imageToRender={profileImage.base64}
                imageType="profileImage"
                rounded
                outlined
              />
            </div>
          </SectionModal>
          <MainModal>
            <TextField
              color={handleInputColor(profileName)}
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
              color={handleInputColor(profileUsername)}
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
              color={handleInputColor(profileBio)}
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