import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../book.model';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.scss']
})
export class BookResultsComponent implements OnInit {
  @Input() book: Book;
  @Input() index: number;
  // @Input() showBooks: boolean;

  constructor() { }

  ngOnInit(): void {
  }
}
