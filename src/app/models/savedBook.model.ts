import { Book } from './book.model';

export interface SavedBook {
  book: Book;
  startDate: string;
  endDate: string;
  rating: number;
}
