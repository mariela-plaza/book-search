import { ViewportScroller } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';
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
  screenWidth: number;
  // @Input() showBooks: boolean;

  constructor(
    private selectedBookCoordService: BookSelectedCoordinatesService,
    private scroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screenWidth = window.innerWidth;
  }

  onSelectBook(event) {
    if (this.screenWidth <= 991) {
      this.scroller.scrollToPosition([0, 0]);
    }
    const selectedBookCoord = { xCoord: event.pageX, yCoord: event.pageY };
    this.selectedBookCoordService.emitSelectedBookCoordinates(
      selectedBookCoord
    );
  }
}
