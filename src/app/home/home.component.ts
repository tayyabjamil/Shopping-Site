import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cartItem = [];
  constructor(        public authService: AuthService,
    public router: Router, public httpService: HttpService, ) { }
allBrands;
filterData = []
  ngOnInit() {
    this.getAllprojects();
  }
  getAllprojects() {

    this.httpService.getAllBrands().subscribe((data: any) => {
    this.allBrands = data;
    this.filterData = this.allBrands;
    });
  }
  select(item){

    this.cartItem.push(item);
    localStorage.setItem('cart', JSON.stringify(this.cartItem));
    

  }
  search(type){

    this.filterData = [];
    this.allBrands.forEach((brand) => {
      if (brand.type === type) {
        return this.filterData.push(brand);
      }
    });
  }

  onLogoutClick() {

    this.authService.loggedOutId();
   this.authService.CartRemove();
  }

}
