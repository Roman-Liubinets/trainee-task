import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CrudService } from '../../../shared/services/crud.service';

interface Workers {
  _id: number;
  name: string;
  editable: boolean;
  permission: string
}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
    email: String ='';
    password: String = '';
    fullName: String = '';
    permission: String = '';
    admin: Boolean = false;
  
  
  workers: Workers[] = [];

  constructor(private matDialogRef: MatDialogRef<AddComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any,
      private crudService: CrudService
    ) { }

  ngOnInit() {
  }

public close() {
  this.matDialogRef.close();
}

addWorker() {
  this.crudService
  .addWorker(this.email, this.password, this.fullName, this.permission, this.admin)
  .subscribe((worker: Workers) => {
    this.workers.push(worker);
    console.log(worker);
    this.close();
  });
}

}