import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { Quote } from './model/quotes';
import { LoginApiService } from './service/Login-api-service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn = false;
  loginUser: Quote;
  isAdminUserIn = false;
  otherUser = false;

  constructor(private authService: LoginApiService, private router: Router) { }
  ngOnInit() {
    this.authService.isLoggedIn.subscribe(val => {
      this.isLoggedIn = val;
      console.log(val);
    })

    this.authService.isAdminUserIn.subscribe(val => {
      this.isAdminUserIn = val;
      console.log(val);
    })

    this.authService.isLoggedIn.subscribe(val => {
      this.otherUser = val;
      console.log(val);
    })
  }


  onLogin() {
    debugger;
    console.log('coming')
    this.router.navigate(['/login'])
  }

  onLogout() {
    this.authService.logout();
  }
  title = 'myApp';
}
