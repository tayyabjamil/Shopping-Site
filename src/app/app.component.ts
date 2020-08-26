import { Component } from '@angular/core';
import { AuthService } from './auth.service';
// import { HttpService } from './http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingSite';
  constructor(


    public authService: AuthService,
    // private httpService: HttpService,
    private router: Router,

    public route: ActivatedRoute,

  ) {}
 
}
