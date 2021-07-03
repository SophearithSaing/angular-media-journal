import { Book } from './book.model';

export interface SavedMovie {
  book: Book;
  startDate: string;
  endDate: string;
  rating: number;
}
