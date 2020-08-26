import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpService } from '../http.service';
import { AuthService } from '../Auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn = true;
  username;
  email;
  password;
  usernameAccount;
  emailAccount;
  passwordAccount;
  newAccount;
  rform;
  token;
  
  rformLogin: FormGroup;
user;
  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService,
    private auth: AuthService,
    private router: Router
  ) { }
  ngOnInit() {
    this.rformLogin = this.formBuilder.group({
      // userId: new FormControl( [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, ]),

    });
  }

  login(){
    if (this.rformLogin.valid) {
      this.httpService.login(this.rformLogin.value).subscribe((res: any) => {
        this.router.navigate(['home']);

        // this.setToken(res.token);
        this.setId(res.userId);
        this.setUsername(res.username);
        this.setAdress(res.adress);
        this.setContact(res.contact);
       
        this.isLoggedIn = true;
        alert('login succesfully');
        this.router.navigate(['home']);
      },(error)=>
      {
        alert('logon Failed . Email Or Password Invalid')
      }
      );
    } else {
      alert('invalid form');
    }
}

setContact(contact) {
  localStorage.setItem('contact', JSON.stringify(contact));
}
setAdress(adress) {
  localStorage.setItem('adress', JSON.stringify(adress));
}
setUsername(username) {
  localStorage.setItem('username', JSON.stringify(username));
}
 setId(userId) {
  localStorage.setItem('userId', JSON.stringify(userId));
}
}
