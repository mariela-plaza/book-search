import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiBookErrorService {
  apiBookError = new Subject<HttpErrorResponse>();

  emitApiBookError(apiError: HttpErrorResponse) {
    this.apiBookError.next(apiError);
  }

  constructor() {}
}
