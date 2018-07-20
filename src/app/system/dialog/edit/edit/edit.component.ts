import {
  Component,
  OnInit,
  Inject,
  Input
} from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
import { CrudService } from '../../../../shared/services/crud.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  // editWorker: Workers[] = [];
  update = this.data.some;
  password;

  //  @Input() public editWorker: Workers;

  constructor(
    private matDialogRef: MatDialogRef < EditComponent > ,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private crudService: CrudService) {}

  ngOnInit() {
    // this.editWorker = this.data.editWorker;
    // console.log(this.editWorker);
    console.log(this.data);

  }

  public close() {
    this.matDialogRef.close();
  }

  updateWorker(email, name, password) {
    //   const editWorker = {
    //   id: this.update._id,
    //   email: this.update.email,
    //   password: this.update.password,
    //   name: this.update.name
    //  }
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
