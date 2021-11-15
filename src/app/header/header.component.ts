import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { APIBookService } from '../shared/api-book.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('form') bookForm: NgForm;

  constructor(private booksSearch: APIBookService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const queryParam = this.bookForm.value.queryParam;
    this.booksSearch.searchQuery(queryParam);
  }

}
