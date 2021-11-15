import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIWrapper } from './api-wrapper.model';

@Injectable({
  providedIn: 'root'
})
export class APIBookService {

  constructor(private http: HttpClient) { }

  searchQuery() {
    this.http.get<any>('https://www.googleapis.com/books/v1/volumes?q=harry&key=AIzaSyDxqCMvt7YcqbT4m-9J2ONJmlK35yxsCkE')
      .subscribe(data => {
        const wrapper = new APIWrapper(data);
        console.log(wrapper);

        // for (let item of wrapper.items) {
        //   console.log(item.volumeInfo.title);
        // }
      })
  }
}
