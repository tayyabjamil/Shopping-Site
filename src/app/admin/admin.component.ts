import { Component, OnInit, ViewChild } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { HttpService } from "../http.service";
import { AuthService } from "../Auth.service";
import { Router } from "@angular/router";
import { FlowDirective } from '@flowjs/ngx-flow';
import { Subscription } from 'rxjs';
@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"],
})
export class AdminComponent implements OnInit {
  title;
  sample;
  price;
  mainImage;
  newBrandForm: FormGroup;
  images: any;
  type: string;
  @ViewChild('flow') flow: FlowDirective;

  autoUploadSubscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.newBrandForm = this.formBuilder.group({
      title: new FormControl("", [Validators.required]),
      sample: new FormControl("", [Validators.required]),
      price: new FormControl("", [Validators.required]),
      image: new FormControl(""),
      type: new FormControl('',[Validators.required]),

    });
  }

  newBrand() {


    if (this.newBrandForm.valid) {
      this.httpService.newBrand(this.newBrandForm).subscribe(
        (res: any) => {
          alert("Brand Launched");
          this.router.navigate(['/home'])
        },
        (error) => {
          alert("logon Failed . Email Or Password Invalid");
        }
      );
    } else {
      alert("invalid form");
    }
  }

  selectCampaignImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
      this.newBrandForm.controls.image.setValue(this.images.name);
    }
  }



  ngAfterViewInit() {
    // this.autoUploadSubscription = this.flow.events$.subscribe(event => {
    //   if (event.type === 'filesSubmitted') {
    //     this.flow.upload();
    //   }
    // });
  }

  ngOnDestroy() {
    // this.autoUploadSubscription.unsubscribe();
  }
}
