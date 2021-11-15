import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  booksChanged = new Subject<Book[]>();
  private booksArray: Book[] = [];

  getBooks() {
    return [...this.booksArray];
  }

  updateBooks(booksArray: Book[]) {
    this.booksArray.push(...booksArray);
    this.emitBooksChanged();
    console.log(this.booksArray);
  }

  emitBooksChanged() {
    this.booksChanged.next([...this.booksArray]);
  }


}
