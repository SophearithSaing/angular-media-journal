import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Music } from '../models/music.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MusicsService {

  apiUrl = environment.musicApiUrl;
  apiHost = environment.musicApiHost;
  apiKey = environment.musicApiKey;

  options = {
    headers: {
      'x-rapidapi-key': this.apiKey,
      'x-rapidapi-host': this.apiHost
    }
  };

  constructor(private http: HttpClient, private firestore: AngularFirestore) { }

  searchMusic = (query: string) => {
    const url = `${this.apiUrl}/search?q=${query}`;
    return this.http.get<{ data: Music[] }>(url, this.options);
  }
}
