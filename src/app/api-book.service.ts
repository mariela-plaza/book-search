import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIBookService {

  constructor(private http: HttpClient) { }

  searchQuery() {
    this.http.get<any>('https://www.googleapis.com/books/v1/volumes?q=harry&key=AIzaSyDxqCMvt7YcqbT4m-9J2ONJmlK35yxsCkE')
      .subscribe(data => {
        const booksArray = data.items;

        for (let item of booksArray) {
          console.log(item.volumeInfo.title);
        }
      })
  }
}
