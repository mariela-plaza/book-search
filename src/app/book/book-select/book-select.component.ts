import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiBookErrorService } from 'src/app/shared/api-book-error.service';

@Component({
  selector: 'app-book-select',
  templateUrl: './book-select.component.html',
  styleUrls: ['./book-select.component.scss'],
})
export class BookSelectComponent implements OnInit, OnDestroy {
  apiError: HttpErrorResponse = null;
  apiErrorSub: Subscription;

  constructor(private apiBookErrorService: ApiBookErrorService) {}

  ngOnInit(): void {
    this.apiErrorSub = this.apiBookErrorService.apiBookError.subscribe(
      (error) => {
        this.apiError = error;
      }
    );

    console.log(this.apiError);
  }

  ngOnDestroy(): void {
    this.apiErrorSub.unsubscribe();
  }
}
