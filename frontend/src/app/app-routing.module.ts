import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUSComponent } from './ContactUS/ContactUS.component'
import { AboutComponent } from './About/About.component'
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component'
import { CreateQuoteComponent } from './create-quote/Create-quote.component';
import { QuoteListComponent } from './list-quote/list-quote.component';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/Create-user.component';
import { EditQuoteComponent } from './edit-quote/Edit-quote.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    component: LoginComponent,
    path: "login"
  },
  {
    component: HomeComponent,
    path: "home"
  },
  {
    component: CreateUserComponent,
    path: "create"
  },
  {
    component: AboutComponent,
    path: "about"
  },
  {
    component: CreateQuoteComponent,
    path: "quote"
  },
  {
    component: ContactUSComponent,
    path: "contact"
  },
  {
    component: QuoteListComponent,
    path: "quotelist"
  },
  {
    component: EditQuoteComponent,
    path: "edit-quote/:id"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
