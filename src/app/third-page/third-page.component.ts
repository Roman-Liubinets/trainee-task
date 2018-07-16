import {
  CrudService
} from './../crud.service';
import {
  HttpClient
} from '@angular/common/http';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  MatTableDataSource,
  MatDialog
} from '@angular/material';
import {
  SelectionModel
} from '@angular/cdk/collections';
import {
  Response
} from '@angular/http';
import {
  MatToolbarModule
} from '@angular/material/toolbar';
import {
  NgxPermissionsService
} from 'ngx-permissions';
import {
  UsersService
} from '../auth/shared/services/user.service';
import {
  AddComponent
} from '../dialog/add/add.component';
import {
  EditComponent
} from '../dialog/edit/edit/edit.component';
import {
  DeleteComponent
} from '../dialog/delete/delete/delete.component';

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
  // editWorker: Workers[] = [];
  user: any;

  fullName: string = '';
  itemSelected;
  currentUser: boolean;
  arr: any[] = [];



  constructor(
    public dialog: MatDialog,
    private crudService: CrudService,
    private permissionsService: NgxPermissionsService,
    public httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.crudService
      .getWorkers()
      .subscribe((workers: Workers[]) => {
        this.workers = workers;
      });

    this.loadData();
    this.currentUser = JSON.parse(window.localStorage.getItem('user')).admin;

  }

  toggleSelect(event) {
    event.selected = !event.selected;
    this.itemSelected = event;
    console.log(this.itemSelected);
    this.arr.push(event);
    console.log(this.arr);
  }
  // Modal windows Open
  // Add Modal
  public addModal() {
    this.dialog.open(AddComponent, {
      data: {}
    }).afterClosed().subscribe(result => {
      this.refresh();
    });
  }
  // Edit Modal
  public editModal() {
    let arrEditing = [];
    this.arr.forEach(currentRes => {
      if (currentRes.selected === true) {
        arrEditing.push(currentRes);
      }
    });
    if (arrEditing.length > 1) {
      alert("Choose 1 element");
      this.arr = [];
      arrEditing = [];
      this.itemSelected = null;
      this.refresh();
      return;
    } else if (!this.itemSelected) {
      alert("Select 1 element");
      return;
    }
    this.dialog.open(EditComponent, {
      data: {
        some: this.itemSelected
      }
    }).afterClosed().subscribe(result => {
      this.arr = [];
      arrEditing = [];
      this.itemSelected = null;
      this.refresh();
    });
  }

  // Delete Modal
  public deleteModal() {
    this.dialog.open(DeleteComponent, {
      data: {
        some: this.itemSelected
      }
    }).afterClosed().subscribe(result => {
      this.refresh();
    });
  }


  getWorkers() {
    this.crudService.getWorkers().subscribe(response => {
      console.log(response);
    });
  }

  public loadData() {
    this.exampleDatabase = new CrudService(this.httpClient);
    this.dataSource = new UserDataSource(this.exampleDatabase);
  }

  // addWorker() {
  //   this.crudService
  //   .addWorker(this.fullName)
  //   .subscribe((worker: Workers) => {
  //     this.workers.push(worker);
  //   });
  //   this.fullName = '';
  // }

  // updateWorker(edit: Workers) {
  //    const editWorker = {
  //    id: edit._id,
  //    name: edit.name
  //   }
  //   this.crudService
  //   .updateWorker(editWorker)
  //   .subscribe((data) => {
  //     console.log(data);
  //   });
  // }

  // deleteWorker(worker: Workers) {
  //   this.crudService.deleteWorker(worker)
  //   .subscribe((data) => {
  //     this.workers = this.workers.filter(w => w._id !== worker._id);
  //   });
  // }

  deleteSelectedModal() {
    let arrDeleted = [];
    this.arr.forEach(currentRes => {
      if (currentRes.selected === true) {
        arrDeleted.push(currentRes);
      }
    });
    arrDeleted.forEach(result => {
      this.crudService.deleteWorker(result)
        .subscribe((data) => {
          this.refresh();
          console.log(this.arr);
        })
    })
  }
  refresh() {
    this.crudService.getWorkers().subscribe((res) => {
      // this.user = res;
      this.dataSource = new UserDataSource(this.crudService);
    })
  }



  displayedColumns: string[] = ['id', 'email', 'password', 'name'];
  dataSource = new UserDataSource(this.crudService);
  exampleDatabase: CrudService | null;

  selection = new SelectionModel < Workers > (true, []);

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
