import { profileEditedInfosActionProps, profileEditedInfosObjProps, usersProfileImagesObjActionProps, usersProfileImagesObjProps } from "./interfaces";

const usersProfileImagesObjInitialState: usersProfileImagesObjProps = {
  profileImage: {
    base64: 'https://i.imgur.com/dMd9k2n.jpg',
    preview: 'https://i.imgur.com/dMd9k2n.jpg',
    path: 'me-myself-and-irene.jpeg'
  },
  profileCover: {
    base64: 'https://i.imgur.com/zCdvhG0.jpg',
    preview: 'https://i.imgur.com/zCdvhG0.jpg',
    path: 'assets'
  },
}

export function usersProfileImagesObj(
  state = usersProfileImagesObjInitialState, 
  action: usersProfileImagesObjActionProps
) {
  const { type, image, imageType } = action;

  switch (type) {
    case 'setProfileImage':
      console.log('action', state)
      const tempUsersProfileImagesObj: any = { ...state };
      tempUsersProfileImagesObj[imageType] = { ...image };
      return tempUsersProfileImagesObj;
    default:
      return state;
  }

}

export function profileEditedInfos(
  state: profileEditedInfosObjProps = {
    profileName: 'Rhuan Bello',
    profileBio: 'Desenvolvedor Front-end 👨‍💻 Amante da sétima arte 🎬',
    profileUsername: 'rhuanbello',
    usersProfileImagesObj: usersProfileImagesObjInitialState
}, action: profileEditedInfosActionProps) {
  const { type, profileNameBio, usersProfileImagesObj } = action;

  switch (type) {
    case 'setProfileEditedInfos':
      const { profileName, profileBio, profileUsername } = profileNameBio;

      console.log('setProfileEditedInfos action', action)

      const tempProfileEditedInfos = {
        profileName: profileName,
        profileBio: profileBio,
        profileUsername: profileUsername,
        usersProfileImagesObj: { ...usersProfileImagesObj }
      }

      return tempProfileEditedInfos;

    default:
      return state;
  }

}