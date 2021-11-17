import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
  @Input() rating: number = 0;
  count: number = 5;
  stars: boolean[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i <= this.count; i++) {
      this.stars.push(i > this.rating);
    }
  }

}
