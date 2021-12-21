import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BookSelectedCoordinatesService } from '../book/books-service/book-selected-coordinates.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  selectedBookCoord: { xCoord: number; yCoord: number };

  constructor(
    private scroller: ViewportScroller,
    private selectedBookCoordService: BookSelectedCoordinatesService
  ) {}

  ngOnInit(): void {
    this.selectedBookCoordService.bookSelectedCoordinates.subscribe(
      (selectedBookCoord) => (this.selectedBookCoord = selectedBookCoord)
    );
  }

  onToTopClick() {
    this.scroller.scrollToPosition([0, 0]);
  }

  onToCurrentBookClick() {
    console.log(this.selectedBookCoord);
    this.scroller.scrollToPosition([
      this.selectedBookCoord.xCoord,
      this.selectedBookCoord.yCoord,
    ]);
  }
}
