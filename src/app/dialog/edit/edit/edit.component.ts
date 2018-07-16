import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CrudService } from '../../../crud.service';
import { Workers } from '../../../models/worker.models';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editWorker: Workers[] = [];
  update=this.data.some;

//  @Input() public editWorker: Workers;

  constructor(
    private matDialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {some: any},
     private crudService: CrudService) { }

  ngOnInit() {
    // this.editWorker = this.data.editWorker;
    // console.log(this.editWorker);
    console.log(this.data);

  }

  public close() {
    this.matDialogRef.close();
  }

  updateWorker(update) {
    const editWorker = {
    id: update._id,
    email: update.email,
    password: update.password,
    name: update.name
   }
   this.crudService
   .updateWorker(editWorker)
   .subscribe((data) => {
     console.log(data);
     this.close();
   });
 }

}
