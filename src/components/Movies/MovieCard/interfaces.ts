export interface MovieCardProps {
  onClick: (value: number) => void;
  movie: movieListTypes;
  isProfile: boolean | undefined;
  isPersonDetails: boolean | undefined;
  index: number;
}

interface movieListTypes {
  id: number;
  poster_path: string;
  release_date: string;
  title: string;

}