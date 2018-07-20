import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  user: User;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }

  search;

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  setPage(form: NgForm) {
    if(this.search == 1) {
      this.router.navigate(['/system', 'first']);
    } else if (this.search == 2) {
      this.router.navigate(['/system', 'second']);
    } else if (this.search == 3) {
      this.router.navigate(['/system', 'third']);
    }  else {
      this.router.navigate(['/system', '**']);
    }
  }

}
