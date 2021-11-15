import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from '../book.model';
import { BooksService } from '../books-service/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  selectedBook: Book;
  booksChanged: Subscription;

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksChanged = this.booksService.booksChanged.subscribe(books => {
      this.selectedBook = books[0];
    })

    this.selectedBook = this.booksService.getBooks()[0];
  }

  ngOnDestroy() {
    this.booksChanged.unsubscribe();
  }

}
