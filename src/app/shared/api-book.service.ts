import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../book/book.model';
import { BooksService } from '../book/books-service/books.service';
import { APIWrapper } from './api-wrapper.model';

@Injectable({
  providedIn: 'root'
})
export class APIBookService {

  constructor(private http: HttpClient, private booksService: BooksService) { }

  searchQuery(queryParam: string) {
    this.http.get<APIWrapper>(`https://www.googleapis.com/books/v1/volumes?q=harry&key=AIzaSyDxqCMvt7YcqbT4m-9J2ONJmlK35yxsCkE`)
      .subscribe(data => {
        const booksArrayAPI = data.items.map(volume => {
          return new Book(volume)
        });
        this.booksService.updateBooks(booksArrayAPI);
      })
  }
}
