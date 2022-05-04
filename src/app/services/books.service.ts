import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book.model';
import { SavedBook } from '../models/savedBook.model';

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

  saveBook = (data: SavedBook) => {
    return new Promise<SavedBook>((resolve, reject) => {
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

  getSavedBooks = (email: string | null | undefined) => {
    return this.firestore
      .collection('books', (ref) => ref.where('email', '==', email))
      .get();
  };

  formatDate = (date: string) => {
    const oldDate = new Date(date);
    const str = oldDate.toDateString().split(' ');
    return `${str[0]}, ${str[2]} ${str[1]} ${str[3]}`;
  };
}
