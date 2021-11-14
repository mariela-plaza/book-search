import { Component, OnInit } from '@angular/core';
import { APIBookService } from '../api-book.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private booksSearch: APIBookService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('data submitted')

    this.booksSearch.searchQuery();
  }

}
