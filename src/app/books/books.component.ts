import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  email: string | null | undefined = '';
  myBooks: any[] = [];

  yearlyList: Array<{
    year: number;
    months: Array<{
      month: string;
      books: Array<any>;
    }>;
  }> = [];

  constructor(public books: BooksService, private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.getUserData().then((userData) => {
      this.email = userData?.email;

      this.books.getSavedBooks(this.email).subscribe((res) => {
        res.docs.forEach((element) => {
          this.myBooks.push(element.data());
        });
        this.sortBooks();
        this.organizeBooks();
      });
    });
  }

  sortBooks = () => {
    this.myBooks.sort((a, b) => {
      const dateA = new Date(a.endDate).getTime();
      const dateB = new Date(b.endDate).getTime();
      return dateA - dateB;
    });
  };

  organizeBooks = () => {
    this.myBooks.forEach((book) => {
      const bookMonth = new Date(book.endDate).toLocaleDateString('en', {
        month: 'long',
      });
      const bookYear = new Date(book.endDate).getFullYear();
      const month = (months: { month: string }) => months.month === bookMonth;
      const year = (years: { year: number }) => years.year === bookYear;
      if (this.yearlyList.some(year) === false) {
        this.yearlyList.push({
          year: bookYear,
          months: [],
        });
      }
      this.yearlyList.forEach((item) => {
        if (item.months.some(month) === false && bookYear === item.year) {
          item.months.push({
            month: bookMonth,
            books: [],
          });
        }
        item.months.forEach((element) => {
          if (bookMonth === element.month && bookYear === item.year) {
            element.books.push(book);
          }
        });
      });
    });
  };

  getYear = (date: string) => {
    const newDate = new Date(date);
    return newDate.getFullYear();
  };
}
