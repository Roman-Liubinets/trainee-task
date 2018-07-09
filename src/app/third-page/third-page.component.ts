import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Response } from '@angular/http';
import { NgxPermissionsService } from 'ngx-permissions';

interface Workers {
  _id: number;
  name: string;
  editable: boolean;
}

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit {
  workers: Workers[] = [];
  // editWorker: Workers[] = [];
  
  fullName: string = '';
  
  constructor(
    private crudService: CrudService,
    private permissionsService: NgxPermissionsService
  ) { }


  ngOnInit() {
    // this.getWorkers();
   this.crudService
   .getWorkers()
   .subscribe((workers: Workers[]) => {
     this.workers = workers;
   });

  //  this.permissionCheck();

  }

  getWorkers() {
    this.crudService.getWorkers().subscribe(response => {
      console.log(response);
    });
  }

  addWorker() {
    this.crudService
    .addWorker(this.fullName)
    .subscribe((worker: Workers) => {
      this.workers.push(worker);
    });
    this.fullName = '';
  }

  updateWorker(edit: Workers) {
     const editWorker = {
     id: edit._id,
      name: edit.name
    }
    console.log(editWorker.id);
    this.crudService
    .updateWorker(editWorker)
    .subscribe((data) => {
      console.log(data);
    });
  }

  deleteWorker(worker: Workers) {
    this.crudService.deleteWorker(worker)
    .subscribe((data) => {
      this.workers = this.workers.filter(w => w._id !== worker._id);
    });
  }

  // permissionCheck() {
  //   var perm = ["ADMIN", "RZA"];
  //   this.permissionsService.loadPermissions(perm);
  //   console.log(perm);
  // }

}
