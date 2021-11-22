import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { APIBookService } from '../shared/api-book.service';
import { BooksService } from '../book/books-service/books.service';
import { BookSearchParamService } from '../book/books-service/book-search-param.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('form') bookForm: NgForm;
  bookSearchParam: string = 'cats';

  constructor(private booksSearch: APIBookService, private router: Router,
    private booksService: BooksService, private bookSearchService: BookSearchParamService) { }

  ngOnInit(): void {

  }

  onNavbarClick() {
    this.booksService.clearBooksArray();

    this.bookSearchParam = 'cats';
    this.bookSearchService.emitBookSearchParam(this.bookSearchParam);

    this.booksSearch.searchBooks(this.bookSearchParam);
    this.router.navigate(['/']);
  }

  onSubmit() {
    this.booksService.clearBooksArray();

    this.bookSearchParam = this.bookForm.value.queryParam;
    this.bookSearchService.emitBookSearchParam(this.bookSearchParam);

    this.booksSearch.searchBooks(this.bookSearchParam);
  }

}
