import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { LoginApiService } from '../service/Login-api-service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  otherUser = false;
  constructor(private formBuilder: FormBuilder, private toaster: ToastrService, private router: Router,
    private loginApiService: LoginApiService
  ) {
  }

  ngOnInit(): void {
    this.loginApiService.isLoggedIn.subscribe(val => {
      this.otherUser = val;
      console.log(val);
    })

    this.form = this.formBuilder.group(
      {
        username: ['',
          [Validators.required
          ]],
        password: ['',
          [
            Validators.required,
          ]
        ],
      },
      {
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.form.valid) {
      return false;
    } else {
      this.loginApiService.login(this.form.value);
      console.log('Login successfully created!')
      this.router.navigate(['home']);
      return true;
    }
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
