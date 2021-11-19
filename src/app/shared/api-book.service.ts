import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../book/book.model';
import { APIWrapper } from './api-wrapper.model';
import { BooksLoadedStatusService } from '../book/books-service/books-loaded-status.service';
import { BooksService } from '../book/books-service/books.service';
import { InitialBooksService } from '../book/books-service/initial-books.service';

@Injectable({
  providedIn: 'root'
})
export class APIBookService {

  constructor(private http: HttpClient, private booksService: BooksService,
    private initialBooksService: InitialBooksService, private loadedBooksStatus: BooksLoadedStatusService) { }

  searchQuery(queryParam: string) {
    this.http.get<any>(`https://www.googleapis.com/books/v1/volumes?q=dogs+intitle:dogs&key=AIzaSyDxqCMvt7YcqbT4m-9J2ONJmlK35yxsCkE`)
      .subscribe(data => {
        const apiWrapper = new APIWrapper(data);
        apiWrapper.removeUnfitItems();

        const booksArrayAPI = apiWrapper.cleanData.map(volume => {
          return new Book(volume)
        });

        this.loadedBooksStatus.showRequestedBooks();
        this.booksService.updateBooks(booksArrayAPI);
      })
  }

  searchPopularBooks() {
    this.http.get<any>(`https://www.googleapis.com/books/v1/volumes?q=cats+intitle:cats&key=AIzaSyDxqCMvt7YcqbT4m-9J2ONJmlK35yxsCkE`)
      .subscribe(data => {
        const apiWrapper = new APIWrapper(data);
        apiWrapper.removeUnfitItems();

        const initialBooksArrayAPI = apiWrapper.cleanData.map(volume => {
          return new Book(volume)
        });

        this.loadedBooksStatus.showPopularBooks();
        this.initialBooksService.createInitialBooksArray(initialBooksArrayAPI);
      })
  }
}

