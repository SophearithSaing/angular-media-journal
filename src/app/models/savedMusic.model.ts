import { Music } from './music.model';

export interface SavedMusic {
  email: string;
  music: Music;
  endDate: string;
  rating: number;
}
