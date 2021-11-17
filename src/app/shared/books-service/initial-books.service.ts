import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from 'src/app/book/book.model';

@Injectable({
  providedIn: 'root'
})
export class InitialBooksService {
  initialBooksChanged = new Subject<Book[]>();
  private initialBooksArray: Book[] = [];

  createInitialBooksArray(booksArray: Book[]) {
    this.initialBooksArray = booksArray;
    this.initialBooksChanged.next([...this.initialBooksArray]);
  }

  getInitialBooks() {
    return [...this.initialBooksArray];
  }

  getBook(index: number) {
    return this.initialBooksArray.slice()[index];
  }
}
