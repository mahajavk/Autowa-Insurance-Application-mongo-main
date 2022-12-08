import { Quote } from '../model/quotes'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuoteApiService } from '../service/Quote-api-service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgZone } from '@angular/core';

@Component({
  selector: 'edit-quote',
  templateUrl: './edit-quote.component.html',
  styleUrls: ['./edit-quote.component.css'],
})
export class EditQuoteComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  quoteData: Quote[];
  calculatedAmount: 0;
  newInsAmount = 0;

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private QuoteApiService: QuoteApiService,
    private quotetoaster: ToastrService,
    private router: Router
  ) {

  }
  ngOnInit() {

    selectedQuote: Quote;
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.QuoteApiService.getQuote(id).subscribe((data) => {
      this.editForm = this.fb.group({
        firstname: data["firstname"],
        lastname: data['lastname'],
        email: data['email'],
        phonenumber: data['phonenumber'],
        regitrationyear: data['regitrationyear'],
        vehiclenumber: data['vehiclenumber'],
        amount: data['amount']
      });
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.editForm.controls;
  }
  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }
  getQuote(id) {
    this.QuoteApiService.getQuote(id).subscribe((data) => {
      this.editForm.setValue({
        firstname: data['firstname'],
        lastname: data['lastname'],
        email: data['email'],
        phonenumber: data['phonenumber'],
        regitrationyear: data['regitrationyear'],
        vehiclenumber: data['vehiclenumber'],
        amount: 444
      });
    });
  }

  onCancel() {
    if (window.confirm('Are you sure?')) {
      this.router.navigate(['/quotelist']);
    }
  }

  onCalculate() {
    const newDate = new Date();
    var yearValue = Number(newDate.getFullYear());
    var currentYear = Number(this.editForm.controls['regitrationyear'].value);
    //let insAmount = this.editForm.controls['amount'].value;
    let insAmount = 1000;
    //let insAmount=0;
    switch (currentYear) {
      case 2023:
        this.newInsAmount = (Number(insAmount) * 20) / 100 + insAmount;
        break;
      case 2023:
        this.newInsAmount = (Number(insAmount) * 40) / 100 + insAmount;
        break;
      case 2024:
        this.newInsAmount = (Number(insAmount) * 60) / 100 + insAmount;
        break;
      case 2025:
        this.newInsAmount = (Number(insAmount) * 80) / 100 + insAmount;
        break;
      case 2026:
        this.newInsAmount = (Number(insAmount) * 80) / 100 + insAmount;
        break;
      case 2027:
        this.newInsAmount = (Number(insAmount) * 80) / 100 + insAmount;
        break;
      default:
        this.newInsAmount = 2000;
    }

    if (this.newInsAmount == 0) {
      this.newInsAmount = 2000;
    }
    this.editForm.controls['amount'].setValue(this.newInsAmount);

    //this.editForm.controls['amount']= insAmount;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        //this.onCalculate();

        this.editForm.controls['amount'].setValue(this.newInsAmount);

        return this.QuoteApiService.updatQuote(id, this.editForm.value).subscribe({
          complete: () => {
            // this.router.navigate(['quote-list']); 
            this.quotetoaster.success('Policy generated successfully!');
            this.router.navigate(['/quotelist']);

          },
          error: (e) => {
            console.log(e);
          },

        });

      }
      return false
    }
  }

}
