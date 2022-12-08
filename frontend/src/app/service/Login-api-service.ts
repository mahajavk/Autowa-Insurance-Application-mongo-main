import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {  HttpClient,  HttpHeaders,  HttpErrorResponse,} from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../model/users';

@Injectable({
  providedIn: 'root',
})
export class LoginApiService {
  baseUri: string = 'http://localhost:4100/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  routerLogin: Router;
  user: User
  tokenResponse: User;

  private loggedIn = new BehaviorSubject<boolean>(false); 
  private adminIn = new BehaviorSubject<boolean>(false); 
  private OtherUserIn = new BehaviorSubject<boolean>(false); 

  get isLoggedIn() {
    return this.loggedIn.asObservable(); 
  }

  get isAdminUserIn() {
    return this.adminIn.asObservable(); 
  }

  get isOtherUser() {
    return this.OtherUserIn.asObservable(); 
  }

  constructor(private http: HttpClient, private router: Router) {

  }

  login(user: User) {
   
    if (user.username == 'admin' && user.password == 'admin') { // {3}

      this.loggedIn.next(true);
      this.OtherUserIn.next(false);
      this.adminIn.next(true);
      this.router.navigate(['/home']);
    }
    else {
      this.OtherUserIn.next(true);
      this.loggedIn.next(false);
      this.adminIn.next(false);
      this.router.navigate(['/home']);
    }
  }

  logout() {

    this.OtherUserIn.next(false);
    this.loggedIn.next(false);
    this.adminIn.next(false);
    this.router.navigate(['/home']);
  }

  // Login

  proceedlogin(data): Observable<any> {
    console.log('login api')
    let url = `${this.baseUri}/proceedlogin`;

    //todo: call response from mongodb table
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  validate(data): User {

    return this.user;

  }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }


}