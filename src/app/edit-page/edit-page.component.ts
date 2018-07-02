import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {
  @Input('workerItem') worker;
  name="";
  workers = [];
  constructor(private crudService: CrudService) { }

  

  ngOnInit() {
    this.workers = this.crudService.workers;
  }

  updateWorker(worker, newValue) {
    worker.fullName = newValue;
      worker.editing = false;
  }

}
