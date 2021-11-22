import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from '../book.model';
import { BooksService } from '../books-service/books.service';
import { APIBookService } from 'src/app/shared/api-book.service';
import { BookSearchParamService } from '../books-service/book-search-param.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {
  booksStatusSub: Subscription;
  booksArray: Book[] = [];
  booksChanged: Subscription
  booksIndex: number = 0;
  bookSearchParam: string = 'cats';

  constructor(private booksService: BooksService, private apiBooks: APIBookService, private bookSearchService: BookSearchParamService) { }

  ngOnInit(): void {
    this.apiBooks.searchBooks(this.bookSearchParam);

    this.booksChanged = this.booksService.booksChanged.subscribe(books => {
      this.booksArray = books;
    })

    this.bookSearchService.bookSearchParam.subscribe(
      searchParam => this.bookSearchParam = searchParam
    )
  }

  onScrollDown(event: any) {
    this.booksIndex += 10;
    this.apiBooks.searchBooks(this.bookSearchParam, this.booksIndex);
  }

  ngOnDestroy() {
    this.booksChanged.unsubscribe();
  }
}
