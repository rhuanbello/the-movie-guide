
import { Modal, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { handleProfileEditedInfos } from '../../../services/store/modules/Global/actions';
import { DropZone } from '../DropZone';

import { Container, Content, HeaderModal, MainModal, SectionModal } from './styles';

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
    profileBio: ''
  });

  const { profileName, profileBio } = profileNameBio;
  
  useEffect(() => {
    const { profileName, profileBio } = profileEditedInfos;
    if (profileName && profileBio) {
      setProfileNameBio({
        profileName: profileName,
        profileBio: profileBio
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
                imageToRender={profileCover}
                imageType="profileCover"
                onErrorImg={'https://1.bp.blogspot.com/-uUTfELqzsz4/YBStkz1UOcI/AAAAAAAB-74/2FV9QAYJ1yIaBwoUlqLIwjFGmi_WNpxNQCLcBGAsYHQ/w640-h360/Garota-Exemplar-1920-1080-Ru%25C3%25ADdo-Exemplar.jpg'}
                width="100%"
              />
            </div>
            <div className="ProfileImage">
              <DropZone 
                imageToRender={profileImage}
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
            />

            <TextField 
              color="success"
              label="Bio"
              defaultValue={profileBio}
              fullWidth 
              focused
              onChange={(e) => handleProfileNameBio(e.target.value, 'profileBio')}
            />
          </MainModal>
        </Content>
      </Container>
    </Modal>
  )

}