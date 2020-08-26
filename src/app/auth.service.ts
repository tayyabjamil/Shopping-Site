import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
username
adress;
contact;
constructor() { }
loggedOutId() {
  return localStorage.removeItem('userId');
  // this.router.navigate(['/home']);
}
loggedIn() {
  return !!localStorage.getItem('userId');
}
getUserName() {
 return this.username = localStorage.getItem('username');
}
getAdress() {
  return this.adress = localStorage.getItem('adress');

 }
 getContact() {
  return this.contact = localStorage.getItem('contact');
 }
CartRemove() {
  return localStorage.removeItem('cart');
  // this.router.navigate(['/home']);
}
}
