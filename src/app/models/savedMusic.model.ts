import { Music } from './music.model';

export interface SavedMusic {
  email: string;
  music: Music;
  date: string;
}
