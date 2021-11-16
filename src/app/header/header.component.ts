import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from '../book/books-service/books.service';
import { APIBookService } from '../shared/api-book.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('form') bookForm: NgForm;

  constructor(private booksSearch: APIBookService, private router: Router, private booksService: BooksService) { }

  ngOnInit(): void {
  }

  onNavbarClick() {
    this.booksService.clearBooksArray();
    this.router.navigate(['/']);
  }

  onSubmit() {
    const queryParam = this.bookForm.value.queryParam;
    this.booksSearch.searchQuery(queryParam);
  }

}
