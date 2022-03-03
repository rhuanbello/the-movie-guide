import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { ProfileImage } from './styles';
import { BiImageAdd } from "react-icons/bi";

export const DropZone = () => {
  const [profileImage, setProfileImage] = useState({});
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    maxSize: 400000,
    accept: 'image/png, image/jpeg',
    onDropRejected: (rejectedFiles) => {
      console.log('ih')
    },
    onDrop: (image) => {
      const draggedImage = image[0];

      const profileImageObj = {
        ...draggedImage,
        preview: URL.createObjectURL(draggedImage)
      }

      setProfileImage(profileImageObj);
      localStorage.setItem('profileImage', JSON.stringify(profileImageObj))

    }
  });

  const handleProfileImageFromLocalStorage = () => {
    const profileImageFromLocalStorage = localStorage.getItem('profileImage');
    if (profileImageFromLocalStorage) {
      setProfileImage(JSON.parse(profileImageFromLocalStorage));
    }
  }

  useEffect(() => {
    handleProfileImageFromLocalStorage();
  }, [localStorage.getItem('profileImage')]);

  return (
    <ProfileImage>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <img src={profileImage?.preview || 'https://s.ltrbxd.com/static/img/avatar300.17f1d3b7.png'} />
        <div>
          <p>Arraste ou Clique para Inserir uma Foto de Perfil</p>
          <BiImageAdd size={32} color="var(--primary)" />      
        </div>
      </div>
    </ProfileImage>
  );
}
