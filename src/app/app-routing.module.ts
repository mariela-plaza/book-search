import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book/book-details/book-details.component';
import { BookSelectComponent } from './book/book-select/book-select.component';
import { BookComponent } from './book/book.component';
import { BookDetailsGuard } from './book/books-service/book-details-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  {
    path: 'books', component: BookComponent, children: [
      { path: '', component: BookSelectComponent },
      { path: ':id', component: BookDetailsComponent, canActivate: [BookDetailsGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
