import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../book.model';
import { BookSelectedCoordinatesService } from '../../books-service/book-selected-coordinates.service';

@Component({
  selector: 'app-book-cards',
  templateUrl: './book-cards.component.html',
  styleUrls: ['./book-cards.component.scss'],
})
export class BookCardsComponent implements OnInit {
  @Input() book: Book;
  @Input() index: number;
  // @Input() showBooks: boolean;

  constructor(
    private selectedBookCoordService: BookSelectedCoordinatesService
  ) {}

  ngOnInit(): void {}

  onSelectBook(event) {
    const selectedBookCoord = { xCoord: event.pageX, yCoord: event.pageY };
    this.selectedBookCoordService.emitSelectedBookCoordinates(
      selectedBookCoord
    );
  }
}
