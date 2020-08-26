
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

constructor(private http: HttpClient, private authService: AuthService) { }
httpHeaders = {
  headers: new HttpHeaders({
    'Content-Type': 'Application/Json',
    accept: ' application/json'
  })
};
login(user) {
  return this.http.post(
    'http://localhost:3001/userAccount/login/',
    {
      email: user.email,
      password: user.password
    },  
    this.httpHeaders
  );
}
Order(data){

  return this.http.post(
    'http://localhost:3001/order/',
    {
      data: data.cartData,
      username:data.username ,
      total: data.total
    },
    this.httpHeaders
  );
}
createAccount(newUser) {

  return this.http.post(
    'http://localhost:3001/userAccount/signUp/',
    {
      username: newUser.username,
      email: newUser.email,
      password: newUser.password,
      adress:newUser.adress,
      contact:newUser.contact
    },
    this.httpHeaders
  );
}
getAllBrands() {
  return this.http.get('http://localhost:3001/brand/' , this.httpHeaders);
}
getAllOrders() {
  return this.http.get('http://localhost:3001/order/' , this.httpHeaders);
}

newBrand(Data) {

  return this.http.post(
    'http://localhost:3001/brand',
    {
      title: Data.value.title,
      sample: Data.value.sample,
      price: Data.value.price,
      mainImage: Data.value.image,
      type: Data.value.type
    },
    this.httpHeaders
  );
}
}
