import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BookCardsComponent } from './book/book-results/book-cards/book-cards.component';
import { BookDetailsComponent } from './book/book-details/book-details.component';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';
import { BookResultsComponent } from './book/book-results/book-results.component';
import { StarsComponent } from './book/book-details/stars/stars.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';

import { bookmarkHeart, search } from 'ngx-bootstrap-icons';
import { CommonModule } from '@angular/common';
import { BookSelectComponent } from './book/book-select/book-select.component';

const icons = {
  bookmarkHeart,
  search,
};

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    BookCardsComponent,
    BookDetailsComponent,
    BookComponent,
    BookResultsComponent,
    BookSelectComponent,
    StarsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatIconModule,
    InfiniteScrollModule,
    NgxBootstrapIconsModule.pick(icons),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
