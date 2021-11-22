import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from '../book.model';
import { BooksService } from '../books-service/books.service';
import { APIBookService } from 'src/app/shared/api-book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {
  booksStatusSub: Subscription;

  booksArray: Book[] = [];
  booksChanged: Subscription

  constructor(private booksService: BooksService, private apiBooks: APIBookService) { }

  ngOnInit(): void {

    this.apiBooks.searchBooks();

    this.booksChanged = this.booksService.booksChanged.subscribe(books => {
      this.booksArray = books;
    })
  }

  ngOnDestroy() {
    this.booksChanged.unsubscribe();
  }
}
