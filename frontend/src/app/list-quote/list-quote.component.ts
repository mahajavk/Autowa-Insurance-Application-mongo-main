import { Component, OnInit } from '@angular/core';
import { QuoteApiService } from '../service/Quote-api-service';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { Quote } from '../model/quotes';

@Component({
  selector: 'quote-list',
  templateUrl: './list-quote.component.html',
  styleUrls: ['./list-quote.component.css']
})
export class QuoteListComponent implements OnInit {
  Quote: any = [];

  selectedQuote: Quote;
  constructor(private apiService: QuoteApiService) {
    this.readQuote();
  }
  ngOnInit() { }

  readQuote() {
    this.apiService.getQuotes().subscribe((data) => {
      this.Quote = data;
    })
  }


  onSelect(quote: Quote): void {
    debugger;
    this.selectedQuote = quote;
  }

  removeQuote(quote, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteQuote(quote._id).subscribe((data) => {
        this.Quote.splice(index, 1);
      }
      )
    }
  }
}