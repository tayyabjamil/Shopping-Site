import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(    private httpService: HttpService,
    private auth: AuthService,
    private router: Router,
public route: ActivatedRoute) { }
data = [];
amount;
totalamount = 0;
  ngOnInit() {
    this.amount = 0;
    // const object = this.route.snapshot.paramMap.get('item');
    // this.data = JSON.parse(object);
    this.getCart();

    this.data.forEach((value) => {
    this.amount = parseInt(value.price) + this.amount;
    this.totalamount = this.amount;
  })

}
getCart() {
  this.data = JSON.parse(localStorage.getItem('cart'));
}
sentOrder(data){
    const cartData = {
cartData:data,
username:this.auth.getUserName(),
total:this.totalamount,
adress:this.auth.getAdress(),
contact:this.auth.getContact()
   }

  this.httpService.Order(cartData).subscribe((res: any) => {
    
    alert('Order Confirmed');
    this.router.navigate(['home']);
  },(error)=>
  {
    alert('Order Not Confirmed')
  }
  );

}
}
