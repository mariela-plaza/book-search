import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from '../../book.model';
import { BooksService } from '../../books-service/books.service';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.scss']
})
export class BookResultsComponent implements OnInit {
  @Input() book: Book;
  @Input() index: number;
  ngOnInit(): void {
  }

  // booksArray: Book[] = [];
  // booksChanged: Subscription

  // constructor(private booksService: BooksService) { }

  // ngOnInit(): void {
  //   this.booksChanged = this.booksService.booksChanged.subscribe(books => {
  //     this.booksArray = books;
  //   })

  //   this.booksArray = this.booksService.getBooks();
  // }

  // ngOnDestroy() {
  //   this.booksChanged.unsubscribe();
  // }

}
