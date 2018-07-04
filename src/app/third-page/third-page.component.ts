import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Response } from '@angular/http';
interface Workers {
  id: number;
  full_name: string;
  editable: boolean;
}

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit {
  workers: Workers[] = [];
  fullName:string="";
  editName:string="";
  
  constructor(private crudService: CrudService) { }


  ngOnInit() {
   this.crudService
   .getWorkers()
   .subscribe((workers: Workers[]) => {
     this.workers = workers;
   });
  }

  addWorker() {
    this.crudService
    .addWorker(this.fullName)
    .subscribe((worker: Workers) => {
      this.workers.push(worker);
    });
    this.fullName="";
  }

  updateWorker(worker: Workers, fullName) {
    this.crudService.updateWorker(worker, fullName)
    .subscribe((data) => {
      console.log(data);
    });
  }

  deleteWorker(worker: Workers) {
    this.crudService.deleteWorker(worker)
    .subscribe((data) => {
      this.workers = this.workers.filter(w => w.id !== worker.id);
    });
  }

}
