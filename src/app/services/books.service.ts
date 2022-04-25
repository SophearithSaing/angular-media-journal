import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  apiUrl = environment.bookApiUrl;
  apiKey = environment.bookApiKey;

  constructor(private http: HttpClient, private firestore: AngularFirestore) {}

  searchBooks(query: string) {
    const url = `${this.apiUrl}?q=${query}&key=${this.apiKey}`;
    return this.http.get<{ totalItems: number; items: Array<Book> }>(url);
  }

  saveBook = (data: any) => {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('books')
        .add(data)
        .then(
          (res) => {},
          (err) => reject(err)
        );
    });
  };

  getBook(id: string) {
    const url = `${this.apiUrl}/${id}&key=${this.apiKey}`;
    return this.http.get<Book>(url);
  }
}
