import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../shared/services/user.service';
import { User } from '../shared/models/user.model';
import { Message } from '../shared/models/message.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: Message;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(1)])
    })
  }

  onSubmit() {
    const formData = this.form.value;
    this.usersService.getUserByEmail(formData.email)
    .subscribe((user: User) => {
      if(user) {
        if(user.password === formData.password) {

        } else {
          //Logic
          alert("Password is incorrect");
        }
      } else {
        alert("This user does not exist!");
      }
    })
  }

}
