import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { CrudService } from '../../../../shared/services/crud.service';

@Component({
  selector: 'app-confirm-add',
  templateUrl: './confirm-add.component.html',
  styleUrls: ['./confirm-add.component.css']
})
export class ConfirmAddComponent implements OnInit {

  constructor(
    private matDialogRef: MatDialogRef<ConfirmAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private crudService: CrudService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    console.log(this.data);
  }


  public continueAdding() {
    this.matDialogRef.close();
  }

  public close() {
    this.dialog.closeAll();
  }

}
