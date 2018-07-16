import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Response } from '@angular/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { User } from "../models/user.model";


@Injectable()
export class UsersService {

    constructor(
        private http: HttpClient) {}

    getUserByEmail(email: string) {
        return this.http.get(`http://localhost:8081/api/user-email/${email}`);

    }


    createNewUser(user: User) {
        return this.http.post('http://localhost:8081/api/user', user);
    }

}