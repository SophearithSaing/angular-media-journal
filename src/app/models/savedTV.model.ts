import { TV } from './tv.model';

export interface SavedTV {
  email: string;
  tv: TV;
  startDate: string;
  endDate: string;
  rating: number;
}
