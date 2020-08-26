import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor( public router: Router, private httpService: HttpService, ) { }
allOrders;
data;
  ngOnInit() {
    
    this.getAllOrders()
  }

  getAllOrders() {
    this.httpService.getAllOrders().subscribe((data: any) => {
    this.allOrders = data;
    this.data=this.allOrders.cartData
  
  });
  }
}
