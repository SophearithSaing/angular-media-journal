import { Movie } from './movie.model';

export interface SavedMovie {
  email: string | undefined;
  movie: Movie;
  endDate: string;
  rating: number;
}

export interface FirebaseRes {
  docs: {
    element: {
      data(): SavedMovie;
    }
  };
}
