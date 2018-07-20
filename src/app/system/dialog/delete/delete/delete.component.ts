import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject} from '@angular/core';
import { UserDataSource } from '../../../third-page/third-page.component';
import { CrudService } from '../../../../shared/services/crud.service';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  
  dataSource = new UserDataSource(this.crudService);


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      some: any
    },
    private matDialogRef: MatDialogRef<DeleteComponent>,
    private crudService: CrudService) { }

  ngOnInit() {
  }

  public close() {
    this.matDialogRef.close();
  }
  
  deleteWorker() {
    console.log(this.data.some);
    this.crudService.deleteWorker(this.data.some)
    .subscribe((res) => {
      this.dataSource = new UserDataSource(this.crudService);
    });
  }

}
