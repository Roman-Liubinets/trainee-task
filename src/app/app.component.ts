import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { appRoutes } from "./app-routing.module";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rrr = appRoutes;
  constructor(private router: Router, private location: Location) {}
    search="";
    notFound;


  setPage(form: NgForm) {
    console.log("Submited!")
    if(this.search == "firstPage") {
      this.router.navigateByUrl('/firstPage');
    } else if (this.search == "secondPage") {
      this.router.navigateByUrl('/secondPage');
    } else if (this.search == "thirdPage") {
      this.router.navigateByUrl('/thirdPage');
    }  else {
      this.router.navigateByUrl('/404');
      this.notFound=false;
    }
  }

  // ss
  // validate(form) {
  //   if (form.valid) {
  //     this.loading = true;
  //     if (this.isEdit) {
  //       this.managersService
  //         .updateCompanyContact(this.companyContactData)
  //         .subscribe(
  //           res => {
  //             this.editModal.close();
  //             this.loading = false;
  //           },
  //           err => {
  //             console.log(err);
  //             this.loading = false;
  //           },
  //       );
  //     } else {
  //       this.managersService
  //         .createCompanyContact(this.companyContactData)
  //         .subscribe(
  //           res => {
  //             this.editModal.close();
  //             this.loading = false;
  //           },
  //           err => {
  //             console.log(err);
  //             this.loading = false;
  //           },
  //       );
  //     }

}
