import {
  Component,
  OnInit,
  Inject,
  Input
} from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog
} from '@angular/material';
import { CrudService } from '../../../../shared/services/crud.service';
import { ConfirmEditComponent } from '../../confirm/confirm-edit/confirm-edit.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  update = this.data.some;
  password;
  editArray = {
    email: '',
    name: '',
    password: ''
  };

  constructor(
    private matDialogRef: MatDialogRef < EditComponent > ,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private crudService: CrudService,
    public dialog: MatDialog) {}

  ngOnInit() {
    console.log(this.data);

  }

  confirm(email, name, password) {
    this.editArray = {
      email: email.value,
      name: name.value,
      password: password.value
    };
    if(this.update.email != this.editArray.email) {
      this.dialog.open(ConfirmEditComponent, {
        data: this.editArray
      })
      .afterClosed()
      .subscribe(result => {
      });
    } else {
      this.matDialogRef.close();
    }
  }


  public close() {
    this.matDialogRef.close();
  }

  updateWorker(email, name, password) {
    const editWorker = {
      id: this.update._id,
      email: email.value,
      password: password.value,
      name: name.value
    }
    console.log(editWorker);
    this.crudService
      .updateWorker(editWorker)
      .subscribe((data) => {
        console.log(data);
        this.close();
      });
  }

}
