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

    addWorker(email, password, name, permission, admin) {
    const data = {
        email: email,
        password: password,
        name: name,
        editable: false,
        admin: admin
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