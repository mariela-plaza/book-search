import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs';
import { BooksService } from './books.service';

@Injectable({
    providedIn: 'root'
})
export class BookDetailsGuard implements CanActivate {
    constructor(private bookService: BooksService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        if (this.bookService.getBooks().length !== 0) {
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }

}