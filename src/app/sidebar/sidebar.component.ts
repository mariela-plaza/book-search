import { ViewportScroller } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookSelectedScrollService } from '../book/books-service/book-selected-scroll.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  selectedBookId: string;
  changedBookId: Subscription;

  constructor(
    private scroller: ViewportScroller,
    private selectedBookCoordService: BookSelectedScrollService
  ) {}

  ngOnInit(): void {
    this.changedBookId =
      this.selectedBookCoordService.bookSelectedCoordinates.subscribe(
        (selectedBookId) => (this.selectedBookId = selectedBookId)
      );
  }

  onToTopClick() {
    this.scroller.scrollToPosition([0, 0]);
  }

  onToCurrentBookClick() {
    this.scroller.scrollToAnchor(this.selectedBookId);
  }

  ngOnDestroy() {
    this.changedBookId.unsubscribe();
  }
}
