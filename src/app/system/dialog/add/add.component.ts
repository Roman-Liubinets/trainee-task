import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { CrudService } from '../../../shared/services/crud.service';
import { ConfirmAddComponent } from '../confirm/confirm-add/confirm-add.component';

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
  


  addArray = {
    email: '',
    password: '',
    fullName: '',
    permission: '',
    admin: false
  }
    
  
  
  workers: Workers[] = [];
  baseArray: any[] = [];

  constructor(private matDialogRef: MatDialogRef<AddComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any,
      private crudService: CrudService,
      public dialog: MatDialog
    ) { }

  ngOnInit() {
  }

  public confirm() {
    if(this.addArray.email.length > 0) {
      this.dialog.open(ConfirmAddComponent, {})
      .afterClosed()
      .subscribe(result => {
      });
    } else {
      this.dialog.closeAll();
    }  
  }



public close() {
  this.matDialogRef.close();
}

addWorker() {
  this.crudService
  .addWorker(this.addArray)
  .subscribe((worker: Workers) => {
    this.workers.push(worker);
    console.log(worker);
    this.close();
  });
}

}