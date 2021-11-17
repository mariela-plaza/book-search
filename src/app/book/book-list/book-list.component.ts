import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Book } from '../book.model';
import { BooksService } from '../../shared/books-service/books.service';
import { InitialBooksService } from 'src/app/shared/books-service/initial-books.service';
import { APIBookService } from 'src/app/shared/api-book.service';
import { BooksLoadedStatusService } from 'src/app/shared/books-service/books-loaded-status.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  showPopularBooks: boolean;
  booksStatusSub: Subscription;

  booksArray: Book[] = [];
  booksChanged: Subscription

  initialBooksArray: Book[] = [];
  initialBooksArrayChanged: Subscription;

  constructor(private booksService: BooksService, private initialBooksService: InitialBooksService,
    private loadedBooksStatus: BooksLoadedStatusService, private apiBooks: APIBookService) { }

  ngOnInit(): void {
    // First list of books
    this.apiBooks.searchPopularBooks();
    this.booksStatusSub = this.loadedBooksStatus.isPopularBooks.subscribe(
      popularBooks => this.showPopularBooks = popularBooks)

    this.initialBooksArrayChanged = this.initialBooksService.initialBooksChanged.subscribe(
      initialBooks => {
        this.initialBooksArray = initialBooks;
      })

    // List of Books fetched from requests
    this.booksChanged = this.booksService.booksChanged.subscribe(books => {
      this.booksStatusSub = this.loadedBooksStatus.isPopularBooks.subscribe(
        popularBooks => this.showPopularBooks = popularBooks)
      this.booksArray = books;
    })

  }

  ngOnDestroy() {
    this.booksChanged.unsubscribe();
    this.initialBooksArrayChanged.unsubscribe();
  }
}
