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
  factories;

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
      console.log('Response is', res);
      console.log('All the factories are', this.factories);
    });
  }

  deleteItem(factory) {
    this.factoryApi.get(factory._id)
    .then((selectedFactory) => {
        this.factory = selectedFactory;
        this.factoryApi.remove(this.factory._id)
        .then(() => {
          console.log('factories without removed one', this.factories);
          this.showList();
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
}
