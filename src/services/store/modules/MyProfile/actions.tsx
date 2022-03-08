export function handleProfileImage(image, imageType) {
  return {
    type: 'setProfileImage',
    image,
    imageType
  }

}

export function handleProfileEditedInfos(profileNameBio, usersProfileImagesObj) {
  return {
    type: 'setProfileEditedInfos',
    profileNameBio,
    usersProfileImagesObj
  }

}