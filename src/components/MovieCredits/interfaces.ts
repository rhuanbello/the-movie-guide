export interface movieCreditsProps {
  movieCredits: Array<movieCreditsTypes>;
  movieTrailer: string;

}

interface movieCreditsTypes {
  character: string;
  original_name: string;
  profile_path:  string | null;

}