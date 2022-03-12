import { useDropzone } from 'react-dropzone';
import { useDispatch } from 'react-redux';

import { BiImageAdd } from "react-icons/bi";

import { handleProfileImage } from '../../../services/store/modules/MyProfile/actions';
import { DropZoneProps } from './interfaces';

import { ProfileImage } from './styles';

export const DropZone = ({ 
  width, 
  rounded, 
  outlined,
  description,
  background,
  imageToRender,
  imageType,
}: DropZoneProps) => {
  const getBase64 = async (file) => {
    new Promise((resolve, reject) => {
      const reader = new FileReader();

      if (file) {
        reader.readAsDataURL(file);
      }

      reader.onload = () =>
        resolve({
          fileName: file.name,
          base64: reader.result,
        });
      reader.onerror = reject;
    });

  }

  const dispatch = useDispatch();
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: 'image/png, image/jpeg',
    onDrop: (image) => {
      const draggedImage = image[0];

      new Promise((resolve, reject) => {
        const reader = new FileReader();

        if (draggedImage) {
          reader.readAsDataURL(draggedImage);
        }

        reader.onload = () =>
          resolve({
            base64: reader.result,
          });
        reader.onerror = reject;
      }).then(({ base64 }: any) => {

        const profileImageObj = {
          ...draggedImage,
          base64,
          preview: URL.createObjectURL(draggedImage)
        }

        dispatch(handleProfileImage(profileImageObj, imageType));

      });
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
          draggable={false}
          style={{
              borderRadius: rounded && '50%',
          }}
          src={imageToRender} 
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
