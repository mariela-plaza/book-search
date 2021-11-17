import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BookResultsComponent } from './book/book-list/book-results/book-results.component';
import { BookDetailsComponent } from './book/book-details/book-details.component';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book/book-list/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    BookResultsComponent,
    BookDetailsComponent,
    BookComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
