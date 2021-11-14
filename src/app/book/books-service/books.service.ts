import { Injectable } from '@angular/core';
import { Book } from '../book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor() { }

  booksArray: Book[] = [
    new Book('Harry Potter',
      ['J.K. Rowling'],
      '',
      5,
      1,
      '',
      '',
      'ES',
      ['juvenile'],
      608),
    new Book('Harry Potter',
      ['J.K. Rowling'],
      '',
      5,
      1,
      '',
      '',
      'ES',
      ['juvenile'],
      608),
    new Book('Harry Potter',
      ['J.K. Rowling'],
      '',
      5,
      1,
      '',
      '',
      'ES',
      ['juvenile'],
      608),
    new Book('Harry Potter',
      ['J.K. Rowling'],
      '',
      5,
      1,
      '',
      '',
      'ES',
      ['juvenile'],
      608)
  ];

  getBooks() {
    return [...this.booksArray];
  }
}
