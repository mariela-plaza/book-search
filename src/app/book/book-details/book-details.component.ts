import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { BooksService } from 'src/app/shared/books-service/books.service';
import { InitialBooksService } from 'src/app/shared/books-service/initial-books.service';
import { Book } from '../book.model';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  bookId: number;
  selectedBook: Book;
  onPopularBooks: boolean;

  constructor(private booksService: BooksService, private initialBookService: InitialBooksService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.onPopularBooks = (queryParams['popularBooks'] === 'true') ? true : false;
      }
    )

    this.route.params.subscribe(
      (params: Params) => {
        this.bookId = +params['id'];
        if (this.onPopularBooks) {
          this.selectedBook = this.initialBookService.getBook(this.bookId);
        } else {
          this.selectedBook = this.booksService.getBook(this.bookId);
        }
      })
  }

}
