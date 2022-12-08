import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './About/About.component';
import { CreateQuoteComponent } from './create-quote/Create-quote.component';
import { HomeComponent } from './home/home.component';
import { ContactUSComponent } from './ContactUS/ContactUS.component';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateUserComponent } from './create-user/Create-user.component'
import { EditQuoteComponent } from './edit-quote/Edit-quote.component'
import { LoginComponent } from './login/login.component';
import { QuoteListComponent } from './list-quote/list-quote.component';
import { UserApiService } from './service/User-api-service';
import { QuoteApiService } from './service/Quote-api-service';
import { LoginApiService } from './service/Login-api-service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CreateQuoteComponent,
    ContactUSComponent,
    HomeComponent,
    CreateUserComponent,
     LoginComponent,
    QuoteListComponent,
    EditQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [UserApiService,
  QuoteApiService, LoginApiService],
   bootstrap: [AppComponent]
})
export class AppModule { }
