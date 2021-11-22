import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookSearchParamService {
  bookSearchParam = new Subject<string>();

  emitBookSearchParam(bookQuery: string) {
    this.bookSearchParam.next(bookQuery);
  }

  constructor() { }
}
