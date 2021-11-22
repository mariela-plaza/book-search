import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../book/book.model';
import { APIWrapper } from './api-wrapper.model';
import { BooksService } from '../book/books-service/books.service';

@Injectable({
  providedIn: 'root'
})
export class APIBookService {

  constructor(private http: HttpClient, private booksService: BooksService) { }

  searchBooks(queryParam: string = 'cats') {
    this.http.get<any>(`https://www.googleapis.com/books/v1/volumes?q=${queryParam}+intitle:${queryParam}&key=AIzaSyDxqCMvt7YcqbT4m-9J2ONJmlK35yxsCkE`)
      .subscribe(data => {
        const apiWrapper = new APIWrapper(data);
        apiWrapper.removeUnfitItems();

        const booksArrayAPI = apiWrapper.cleanData.map(volume => {
          return new Book(volume)
        });

        this.booksService.updateBooks(booksArrayAPI);
      })
  }
}

