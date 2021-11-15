import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from '../book.model';
import { BooksService } from '../books-service/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  booksArray: Book[] = [];
  booksChanged: Subscription

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksChanged = this.booksService.booksChanged.subscribe(books => {
      this.booksArray = books;
    })

    this.booksArray = this.booksService.getBooks();
  }

  ngOnDestroy() {
    this.booksChanged.unsubscribe();
  }


}
