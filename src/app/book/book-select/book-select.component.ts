import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiBookErrorService } from 'src/app/shared/api-book-error.service';

@Component({
  selector: 'app-book-select',
  templateUrl: './book-select.component.html',
  styleUrls: ['./book-select.component.scss'],
})
export class BookSelectComponent implements OnInit {
  apiError: HttpErrorResponse = null;

  constructor(private apiBookErrorService: ApiBookErrorService) {}

  ngOnInit(): void {
    this.apiBookErrorService.apiBookError.subscribe((error) => {
      this.apiError = error;
    });

    console.log(this.apiError);
  }
}
