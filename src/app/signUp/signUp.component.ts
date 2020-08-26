import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { HttpService } from '../http.service';
import { AuthService } from '../Auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css']
})
export class SignUpComponent implements OnInit {
  rformSignup: FormGroup;
  islogedin: false;

  email;
  password;
  adress;
  conatct;
  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService,
    public auth: AuthService,
    private router: Router
  ) { }


  ngOnInit() {
    this.rformSignup = this.formBuilder.group({
      username: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(6) ]),
      adress: new FormControl('', [Validators.required,Validators.minLength(6) ]),
      contact: new FormControl('', [Validators.required,Validators.maxLength(11) ]),
   
    });
  }


  signUp(){
if (this.rformSignup.valid) {

  this.httpService.createAccount(this.rformSignup.value) .subscribe((res: any) => {
    alert('account created');});
  alert('Account Created');
  this.router.navigate(['/login']);

} else {
  alert('invalid form');
}
}

    }




