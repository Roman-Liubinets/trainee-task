import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Response } from '@angular/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { User } from "../models/user.model";
import { NgxPermissionsService } from "ngx-permissions";


@Injectable()
export class UsersService {

    constructor(
        private http: HttpClient,
        private permissionsService: NgxPermissionsService
    ) {}

    // getUserByEmail(email: string) {
    //     return this.http.get(`http://localhost:8081/api/users?email=${email}`)
    //     .pipe(map((user: User[]) => user[2] ? user[2] : undefined));

    // }

    getUserByEmail(email: string) {
        return this.http.get(`http://localhost:8081/api/users?email=${email}`)
        // .pipe(map((response: Response) => {
        //     response.json();
        // }))
        .pipe(map((user: User[]) => 
            user[0] ? user[0] : undefined
        ));

    }


    createNewUser(user: User) {
        return this.http.post('http://localhost:8081/api/user', user);
    }

}