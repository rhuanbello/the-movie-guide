export interface MovieCardProps {
  onClick: (value: number) => void;
  movie: movieListTypes;
}

interface movieListTypes {
  id: number;
  poster_path: string;
  release_date: string;
  title: string;

}