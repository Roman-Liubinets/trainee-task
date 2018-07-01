import { Component, OnInit, Input } from '@angular/core';
import { CrudService} from '../crud.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {
  @Input('workerItem') worker;

  constructor(private crudService: CrudService) { }

  getClass() {
    return{
      'list-group-item': true
    }
  }

  ngOnInit() {

  }
workerName="";
workerEditedName="Edited Name";

  deleteWorker() {
    this.crudService.deleteWorker(this.workerName);
  }
//   editWorker() {
//     this.crudService.editWorker(this.workerEditedName);
// } 
  
}
