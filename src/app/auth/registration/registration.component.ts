import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../shared/services/user.service';
import { User } from '../shared/models/user.model';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(1)]),
      'name': new FormControl(null, [Validators.required]),
      'permission': new FormControl("ADMIN")
    });
  }

  onSubmit() {
    const {email, password, name, permission} = this.form.value;
    const user = new User(email, password, name, permission);    
    this.usersService.createNewUser(user)
      .subscribe((user: User) => {
        this.router.navigate(['/login'], {
          queryParams: {
            nowCanLogin: true
          }
        });
      });
    }

    // forbiddenEmails(control: FormControl): Promise<any> {
    //   return new Promise((resolve, reject) => {
    //     this.usersService.getUserByEmail(control.value)
    //     .subscribe((user: User) => {
    //       if(user) {
    //         resolve({forbiddenEmail: true})
    //       } else {
    //         resolve(null);
    //       }
    //     });
    //   });
    // }

}
