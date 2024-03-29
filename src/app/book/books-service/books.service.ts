import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from 'src/app/book/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  booksChanged = new Subject<Book[]>();
  private booksArray: Book[] = [];

  getBooks() {
    return [...this.booksArray];
  }

  getBook(index: number) {
    return this.booksArray.slice()[index];
  }

  updateBooks(booksArray: Book[]) {
    this.booksArray.push(...booksArray);
    this.emitBooksChanged();
  }

  clearBooksArray() {
    this.booksArray = [];
    this.emitBooksChanged();
  }

  emitBooksChanged() {
    this.booksChanged.next([...this.booksArray]);
  }

}
