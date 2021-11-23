import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../book.model';

@Component({
  selector: 'app-book-cards',
  templateUrl: './book-cards.component.html',
  styleUrls: ['./book-cards.component.scss']
})
export class BookCardsComponent implements OnInit {
  @Input() book: Book;
  @Input() index: number;
  // @Input() showBooks: boolean;

  constructor() { }

  ngOnInit(): void {
  }
}
