import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit {

  constructor(private crudService: CrudService) { }

  workers = [];

  ngOnInit() {
    this.workers = this.crudService.workers;
  }

}
