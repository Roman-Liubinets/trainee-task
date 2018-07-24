import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CrudService {

    constructor(private http: HttpClient) {}

    getWorkers() {
    return this.http.get('http://localhost:8081/api/users');
}

    addWorker(addArray) {
    const data = {
        email: addArray.email,
        password: addArray.password,
        name: addArray.fullName,
        editable: false,
        admin: addArray.admin
    };
    return this.http.post('http://localhost:8081/api/user', data);
    }

    updateWorker(editWorker: any) {
        return this.http.put(`http://localhost:8081/api/user`, editWorker);
    }

    deleteWorker(worker: any) {
        return this.http.delete(`http://localhost:8081/api/user/${worker._id}`);
    }
}