import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit, OnChanges {
  @Input() rating: number = 0;
  count: number = 5;
  stars: boolean[] = [];

  constructor() { }

  ngOnChanges() {
    this.buildStarsArray();
  }

  ngOnInit(): void {
    this.buildStarsArray();
  }

  buildStarsArray() {
    this.stars = [];
    for (let i = 1; i <= this.count; i++) {
      this.stars.push(i > this.rating);
    }
  }

}
