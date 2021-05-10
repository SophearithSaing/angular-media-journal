import { Movie } from './movie.model';

export interface SavedMovie {
  movie: Movie;
  startDate: Date;
  endDate: Date;
  network: string;
  rating: number;
}
