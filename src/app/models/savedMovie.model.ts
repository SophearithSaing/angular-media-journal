import { Movie } from './movie.model';

export interface SavedMovie {
  email: string | undefined;
  movie: Movie | any;
  endDate: string;
  network: string;
  rating: number;
}

export interface FirebaseRes {
  docs: {
    element: {
      data(): SavedMovie;
    }
  };
}
