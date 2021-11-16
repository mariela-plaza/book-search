import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book/book-details/book-details.component';
import { BookSearchComponent } from './book/book-search/book-search.component';
import { BookSelectComponent } from './book/book-select/book-select.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  { path: '', component: BookSearchComponent },
  {
    path: 'books', component: BookComponent, children: [
      { path: '', component: BookSelectComponent },
      { path: ':id', component: BookDetailsComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
