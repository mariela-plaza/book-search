import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BookSelectedScrollService } from '../book/books-service/book-selected-coordinates.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  selectedBookId: string;

  constructor(
    private scroller: ViewportScroller,
    private selectedBookCoordService: BookSelectedScrollService
  ) {}

  ngOnInit(): void {
    this.selectedBookCoordService.bookSelectedCoordinates.subscribe(
      (selectedBookId) => (this.selectedBookId = selectedBookId)
    );
  }

  onToTopClick() {
    this.scroller.scrollToPosition([0, 0]);
  }

  onToCurrentBookClick() {
    console.log(this.selectedBookId);
    this.scroller.scrollToAnchor(this.selectedBookId);

    /*scrollToPosition([
      this.selectedBookCoord.xCoord,
      this.selectedBookCoord.yCoord,
    ]);*/
  }
}
