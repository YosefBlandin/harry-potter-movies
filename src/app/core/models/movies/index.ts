export type Movies = Array<Movie>;

export interface Movie {
  id: string;
  title: string;
  duration: string;
  budget: string;
  release_date: Date;
}

export interface MovieDetails extends Movie {
  box_office: string;
  cinematographers: string[] | string;
  poster: string;
  producers: string[] | string;
  summary: string;
}
