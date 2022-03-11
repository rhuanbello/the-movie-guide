import { profileEditedInfosObjProps, profileTypes, usersProfileImagesObjActionProps } from "./interfaces"

export function handleProfileImage(
  image: profileTypes, 
  imageType: string
) {
  return {
    type: 'setProfileImage',
    image,
    imageType
  }

}

export function handleProfileEditedInfos(
  profileNameBio: profileEditedInfosObjProps, 
  usersProfileImagesObj: usersProfileImagesObjActionProps
) {
  return {
    type: 'setProfileEditedInfos',
    profileNameBio,
    usersProfileImagesObj
  }

}