import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CrudService } from '../../../crud.service';
import { Workers } from '../../../models/worker.models';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public editWorker: Workers;

  constructor(
    private matDialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {editWorker: Workers},
     private crudService: CrudService) { }

  ngOnInit() {
    this.editWorker = this.data.editWorker;
    console.log(this.editWorker);
  }

  public close() {
    this.matDialogRef.close();
  }

}
