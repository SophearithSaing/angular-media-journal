import { Movie } from './movie.model';

export interface SavedMovie {
  email: string;
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
