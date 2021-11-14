import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BooksService } from '../books-service/books.service';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.scss']
})
export class BookResultsComponent implements OnInit {
  booksArray: Book[] = [];

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksArray = this.booksService.getBooks();
    console.log(this.booksArray);
  }

}
