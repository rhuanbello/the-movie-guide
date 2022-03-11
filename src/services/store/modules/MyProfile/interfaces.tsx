interface MoviesToRenderTypes {
  title: string;
  id: number;
  poster_path: string;
  release_date: string;

}
export interface genresTypes {
  id: number;
  name: string;

}

export interface usersProfileImagesObjProps {
  profileImage: profileTypes,
  profileCover: profileTypes,

}

export interface profileEditedInfosObjProps {
  profileName?: string;
  profileBio?: string;
  profileUsername?: string;
  usersProfileImagesObj?: usersProfileImagesObjProps

}

export interface usersProfileImagesObjActionProps {
  image: profileTypes;
  imageType: string;
  type: string;

}

export interface profileEditedInfosActionProps {
  profileNameBio: profileEditedInfosObjProps;
  type: string;
  usersProfileImagesObj?: usersProfileImagesObjProps;

}

export type profileTypes = {
  base64?: string;
  preview?: string;
  path?: string;

}