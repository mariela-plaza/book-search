import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from '../book.model';
import { BooksService } from '../books-service/books.service';
import { APIBookService } from 'src/app/shared/api-book.service';
import { BookSearchParamService } from '../books-service/book-search-param.service';
import { ApiBookErrorService } from 'src/app/shared/api-book-error.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.scss'],
})
export class BookResultsComponent implements OnInit, OnDestroy {
  booksArray: Book[] = [];
  booksChanged: Subscription;

  booksIndex: number = 0;
  bookSearchParam: string = 'cats';

  apiBookError: HttpErrorResponse = null;
  apiErrorSub: Subscription;

  constructor(
    private booksService: BooksService,
    private apiBooks: APIBookService,
    private bookSearchService: BookSearchParamService,
    private apiBookErrorService: ApiBookErrorService
  ) {}

  ngOnInit(): void {
    this.apiBooks.searchBooks(this.bookSearchParam);

    this.booksChanged = this.booksService.booksChanged.subscribe((books) => {
      this.booksArray = books;
    });

    this.bookSearchService.bookSearchParam.subscribe(
      (searchParam) => (this.bookSearchParam = searchParam)
    );

    this.apiErrorSub = this.apiBookErrorService.apiBookError.subscribe(
      (error) => {
        this.apiBookError = error;
      }
    );
  }

  onScrollDown(event: any) {
    this.booksIndex += 10;
    this.apiBooks.searchBooks(this.bookSearchParam, this.booksIndex);
  }

  ngOnDestroy() {
    this.booksChanged.unsubscribe();
    this.apiErrorSub.unsubscribe();
  }
}
