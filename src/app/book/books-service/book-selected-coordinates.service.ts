import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookSelectedCoordinatesService {
  bookSelectedCoordinates = new Subject<{ xCoord: number; yCoord: number }>();

  emitSelectedBookCoordinates(selectedBookCoord: {
    xCoord: number;
    yCoord: number;
  }) {
    this.bookSelectedCoordinates.next(selectedBookCoord);
  }

  constructor() {}
}
