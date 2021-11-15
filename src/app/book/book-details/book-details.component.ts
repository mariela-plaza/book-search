import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from '../book.model';
import { BooksService } from '../books-service/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  bookId: number;
  selectedBook: Book;

  constructor(private booksService: BooksService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.bookId = +params['id'];
        this.selectedBook = this.booksService.getBook(this.bookId);
      })
  }

}
