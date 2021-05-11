import { Movie } from './movie.model';

export interface SavedMovie {
  movie: Movie;
  startDate: string;
  endDate: string;
  network: string;
  rating: number;
}
