import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Book } from '../book.model';
import { BooksService } from '../../shared/books-service/books.service';
import { InitialBooksService } from 'src/app/shared/books-service/initial-books.service';
import { APIBookService } from 'src/app/shared/api-book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  showPopularBooks: boolean = true;

  booksArray: Book[] = [];
  booksChanged: Subscription

  initialBooksArray: Book[] = [];
  initialBooksArrayChanged: Subscription;

  constructor(private booksService: BooksService, private initialBooksService: InitialBooksService, private apiBooks: APIBookService) { }

  ngOnInit(): void {
    // First list of books
    this.apiBooks.searchPopularBooks();

    this.initialBooksArrayChanged = this.initialBooksService.initialBooksChanged.subscribe(
      initialBooks => {
        this.initialBooksArray = initialBooks;
      })

    // List of Books fetched from requests
    this.booksChanged = this.booksService.booksChanged.subscribe(books => {
      this.showPopularBooks = false;
      this.booksArray = books;
    })

  }

  ngOnDestroy() {
    this.booksChanged.unsubscribe();
    this.initialBooksArrayChanged.unsubscribe();
  }
}
