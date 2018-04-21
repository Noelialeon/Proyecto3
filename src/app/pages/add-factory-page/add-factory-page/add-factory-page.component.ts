import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-add-factory-page',
  templateUrl: './add-factory-page.component.html',
  styleUrls: ['./add-factory-page.component.css']
})
export class AddFactoryPageComponent implements OnInit {
user;

  constructor(
    private session: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.session.getUser();
  }

}
