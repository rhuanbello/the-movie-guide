export function usersProfileImagesObj(state = {
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
}, action: any) {
  const { type, image, imageType } = action;

  switch (type) {
    case 'setProfileImage':
      const tempUsersProfileImagesObj = { ...state };
      tempUsersProfileImagesObj[imageType] = { ...image };
      console.log('retornando', tempUsersProfileImagesObj)
      return tempUsersProfileImagesObj;
    default:
      return state;
  }

}

export function profileEditedInfos(state = {
  profileName: 'Rhuan Bello',
  profileBio: 'Desenvolvedor Front-end 👨‍💻 Amante da sétima arte 🎬',
  profileUsername: 'rhuanbello',
  usersProfileImagesObj: {
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
}, action: any) {
  const { type, profileNameBio, usersProfileImagesObj } = action;

  switch (type) {
    case 'setProfileEditedInfos':
      const { profileName, profileBio, profileUsername } = profileNameBio;

      console.log(profileUsername)

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