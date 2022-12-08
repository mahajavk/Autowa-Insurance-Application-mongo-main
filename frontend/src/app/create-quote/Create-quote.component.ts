import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { QuoteApiService } from '../service/Quote-api-service';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';
@Component({
  selector: 'create-quote',
  templateUrl: './Create-quote.component.html',
  styleUrls: ['./Create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {
  quoteform: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private toaster: ToastrService,
    private quoteapiService: QuoteApiService,
    private router: Router,
    private ngZone: NgZone,
  ) {
  }

  ngOnInit(): void {
    this.quoteform = this.formBuilder.group(
      {
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        email: ['', Validators.required],
        phonenumber: ['', Validators.required],
        registrationyear: ['', Validators.required],
        vehiclenumber: ['', Validators.required]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.quoteform.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.quoteform.valid) {
      return false;
    } else {
      return this.quoteapiService.createQuote(this.quoteform.value).subscribe({
        complete: () => {
          console.log('Quote successfully created!'),
            this.router.navigate(['/quotelist']);
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }

  onReset(): void {
    this.submitted = false;
    this.quoteform.reset();
  }
}
