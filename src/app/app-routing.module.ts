import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book/book-details/book-details.component';
import { BookSelectComponent } from './book/book-select/book-select.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  { path: 'books', component: BookSelectComponent },
  { path: 'books/:id', component: BookDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
