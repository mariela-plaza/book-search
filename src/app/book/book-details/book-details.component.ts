import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BooksService } from '../books-service/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  selectedBook: Book;

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.selectedBook = this.booksService.getBooks()[0];
  }

}
