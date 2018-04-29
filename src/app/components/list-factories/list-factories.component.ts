import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FactoryApiService } from '../../services/factory-api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-factories',
  templateUrl: './list-factories.component.html',
  styleUrls: ['../../app.component.css']
})
export class ListFactoriesComponent implements OnInit {
  user;
  factory: any = {};
  factories: any = [];

  constructor(
    private session: AuthService,
    private factoryApi: FactoryApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.user = this.session.getUser();
    this.showList();
  }

  showList() {
    this.factoryApi.getList().then(res => {
      this.factories = res;
      this.factories.forEach((factory) => factory.editing = false);
    });
  }

  showForm(factory) {
    this.factories.forEach((fact) => fact.editing = false);
    factory.editing = true;
  }

  updateFactory(factory) {
    this.factoryApi.update(factory);
  }

  delete(factory) {
    this.factoryApi
      .get(factory._id)
      .then(selectedFactory => {
        this.factory = selectedFactory;
        this.factoryApi.remove(this.factory._id).then(() => {
          this.showList();
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
}
