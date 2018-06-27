import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { appRoutes } from "./app-routing.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rrr = appRoutes;
  constructor(private router: Router, private location: Location) {}
    search="";

  setPage() {
    if(this.search == "firstPage") {
      this.router.navigateByUrl('/firstPage');
    } else if (this.search == "secondPage") {
      this.router.navigateByUrl('/secondPage');
    } else if (this.search == "thirdPage") {
      this.router.navigateByUrl('/thirdPage');
    }  else {
      this.router.navigateByUrl('/404');
    }
  }

}
