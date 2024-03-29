import { ViewportScroller } from '@angular/common';
import {
  Component,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Book } from '../../book.model';
import { BookSelectedScrollService } from '../../books-service/book-selected-scroll.service';

@Component({
  selector: 'app-book-cards',
  templateUrl: './book-cards.component.html',
  styleUrls: ['./book-cards.component.scss'],
})
export class BookCardsComponent implements OnInit {
  @Input() book: Book;
  @Input() index: number;
  screenWidth: number;

  @ViewChild('selectedBook') selectedBook;
  // @Input() showBooks: boolean;

  constructor(
    private selectedBookCoordService: BookSelectedScrollService,
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
    if (this.screenWidth <= 992) {
      this.scroller.scrollToPosition([0, 0]);
    }

    this.selectedBookCoordService.emitSelectedBookCoordinates(
      this.selectedBook.nativeElement.id
    );
  }
}
