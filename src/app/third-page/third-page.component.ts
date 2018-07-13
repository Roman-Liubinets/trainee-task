import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatDialog} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { Response } from '@angular/http';
import {MatToolbarModule} from '@angular/material/toolbar';

import { CrudService } from '../crud.service';
import { NgxPermissionsService } from 'ngx-permissions';
import { UsersService } from '../auth/shared/services/user.service';
import { AddComponent } from '../dialog/add/add.component';
import { EditComponent } from '../dialog/edit/edit/edit.component';


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
  editWorker: Workers[] = [];
  
  fullName: string = '';
  itemSelected;
  
  constructor(
    public dialog: MatDialog,
    private crudService: CrudService,
    private permissionsService: NgxPermissionsService
  ) { } 

  ngOnInit() {
   this.crudService
   .getWorkers()
   .subscribe((workers: Workers[]) => {
     this.workers = workers;
   });

  }

  toggleSelect(event) {
    event.selected = !event.selected;
    this.itemSelected = event;
    console.log(this.itemSelected);
  }
// Modal windows Open
  public addModal() {
    this.dialog.open(AddComponent, {data: {}})
  }

  public editModal() {
    this.dialog.open(EditComponent, {data: {
      editWorker: this.editWorker
    }});
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
    this.crudService
    .updateWorker(editWorker)
    .subscribe((data) => {
      console.log(data);
    });
  }

  // deleteWorker(worker: Workers) {
  //   this.crudService.deleteWorker(worker)
  //   .subscribe((data) => {
  //     this.workers = this.workers.filter(w => w._id !== worker._id);
  //   });
  // }

  deleteWorker() {
    this.crudService.deleteWorker(this.itemSelected)
    .subscribe((data) => {
      this.dataSource = new UserDataSource(this.crudService);
    });
  }

  displayedColumns: string[] = ['id', 'email', 'password', 'name'];
  dataSource = new UserDataSource(this.crudService);

  selection = new SelectionModel<Workers>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }

  // /** Selects all rows if they are not all selected; otherwise clear selection. */
  // masterToggle() {
  //   this.isAllSelected() ?
  //       this.selection.clear() :
  //       this.dataSource.data.forEach(row => this.selection.select(row));
  // }


}

export class UserDataSource {
  constructor(private crudService: CrudService) {}

  connect() {
    return this.crudService.getWorkers();
  }
}