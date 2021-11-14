import { Injectable } from '@angular/core';
import { Book } from '../book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor() { }

  booksArray: Book[] = [
    new Book('Harry Potter 1',
      ['J.K. Rowling'],
      'http://books.google.com/books/content?id=z2hczgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
      5,
      1,
      '',
      '',
      'ES',
      ['juvenile'],
      608),
    new Book('Harry Potter 2',
      ['J.K. Rowling'],
      'http://books.google.com/books/content?id=2zgRDXFWkm8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      5,
      1,
      '',
      '',
      'ES',
      ['juvenile'],
      608),
    new Book('Harry Potter 3',
      ['J.K. Rowling'],
      'http://books.google.com/books/content?id=XLVvAAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
      5,
      1,
      '',
      '',
      'ES',
      ['juvenile'],
      608),
    new Book('Harry Potter 4',
      ['J.K. Rowling'],
      'http://books.google.com/books/content?id=AB8VAAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"',
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
