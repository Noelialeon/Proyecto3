import { Component, OnInit } from '@angular/core';
import { FactoryApiService } from '../../services/factory-api.service';

@Component({
  selector: 'app-add-factory-form',
  templateUrl: './add-factory-form.component.html',
  styleUrls: ['./add-factory-form.component.css']
})
export class AddFactoryFormComponent implements OnInit {
  factory: any = {};
  factories: any[] = [];

  constructor(private factoryApi: FactoryApiService) {}

  ngOnInit() {}

  addItem() {
    this.factoryApi.add(this.factory).then(res => {
      console.log(res);
    });
  }

  showList() {
    this.factoryApi.getList()
    .then( (res) => console.log('All the factories are', res));
  }
}

