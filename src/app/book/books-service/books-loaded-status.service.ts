import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksLoadedStatusService {
  isPopularBooks = new Subject<boolean>();

  showPopularBooks() {
    this.isPopularBooks.next(true);
  }

  showRequestedBooks() {
    this.isPopularBooks.next(false);
  }

}
