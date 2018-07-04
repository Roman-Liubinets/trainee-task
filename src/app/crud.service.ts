import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map } from 'rxjs/operators';
import { Worker } from "cluster";

@Injectable()
export class CrudService {

    constructor(private http: Http) {}

getWorkers() {
    return this.http.get('http://localhost:3000/workers')
    .pipe(
        map((response: Response) => response.json()));
    }

addWorker(fullName: string) {
    const data = {
        full_name: fullName,
        editable: false
    };
    return this.http.post('http://localhost:3000/workers', data)
    .pipe(
        map((response: Response) => response.json()));
    }

    updateWorker(worker: any, fullName) {
        worker.full_name = fullName;
        return this.http.put(`http://localhost:3000/workers/${worker.id}`, worker)
        .pipe(
            map((response: Response) => response.json()));
    }

    deleteWorker(worker: any) {
        return this.http.delete(`http://localhost:3000/workers/${worker.id}`)
        .pipe(
            map((response: Response) => response.json()));
    }
}