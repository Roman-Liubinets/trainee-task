import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { CrudService } from '../../../../shared/services/crud.service';

@Component({
  selector: 'app-confirm-edit',
  templateUrl: './confirm-edit.component.html',
  styleUrls: ['./confirm-edit.component.css']
})
export class ConfirmEditComponent implements OnInit {

  constructor(
    private matDialogRef: MatDialogRef<ConfirmEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private crudService: CrudService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {}

  public continueAdding() {
    this.matDialogRef.close();
  }

  public close() {
    this.dialog.closeAll();
  }

}
