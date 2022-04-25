import { Book } from './book.model';

export interface SavedBook {
  email: string;
  book: Book;
  startDate: string;
  endDate: string;
  rating: number;
}
