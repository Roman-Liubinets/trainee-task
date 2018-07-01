import { CrudService } from './../crud.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.css']
})
export class AddWorkerComponent {
  workerName="";
  addWorker() {
    this.crudService.addWorker(this.workerName);
    this.workerName = "";
  }

  constructor(private crudService: CrudService) { }


}
