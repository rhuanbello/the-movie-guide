import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { ProfileImage } from './styles';
import { BiImageAdd } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { handleProfileCover, handleProfileImage } from '../../../services/store/modules/Global/actions';

export const DropZone = ({ 
  width, 
  onErrorImg, 
  rounded, 
  outlined,
  description,
  background,
  imageToRender,
  imageType,
}) => {
  const dispatch = useDispatch();
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    maxSize: 400000,
    accept: 'image/png, image/jpeg',
    onDrop: (image) => {
      const draggedImage = image[0];
      const profileImageObj = {
        ...draggedImage,
        preview: URL.createObjectURL(draggedImage)
      }

      dispatch(handleProfileImage(profileImageObj, imageType))


    }
  });

  return (
    <ProfileImage style={{
      width: width,
      borderRadius: rounded && '50%',
      outline: outlined && ' 3px solid var(--primary)',
      background: background
    }}>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <img 
          style={{
              borderRadius: rounded && '50%',
          }}
          src={imageToRender?.preview} 
          onError={(e) => e.target.src = onErrorImg}
        />
        <div>
          {description && (
            <p>Arraste ou Clique para Inserir uma Foto de Perfil</p>
          )}
          <BiImageAdd size={32} color="var(--primary)" />      
        </div>
      </div>
    </ProfileImage>
  );
}
