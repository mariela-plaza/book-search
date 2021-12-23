import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookSelectedScrollService {
  bookSelectedCoordinates = new Subject<string>();

  emitSelectedBookCoordinates(bookId: string) {
    this.bookSelectedCoordinates.next(bookId);
  }

  constructor() {}
}
