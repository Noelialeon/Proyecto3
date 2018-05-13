import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FactoryApiService } from '../../services/factory-api.service';

@Component({
  selector: 'app-factory-card',
  templateUrl: './factory-card.component.html',
  styleUrls: ['../../app.component.css']
})
export class FactoryCardComponent implements OnInit {
  editing = false;
  @Output() delete = new EventEmitter<string>();
  @Output() update = new EventEmitter<string>();
  @Output() showForm = new EventEmitter<string>();

  @Input() factory;

  constructor(private factoryApi: FactoryApiService) {}

  ngOnInit() {
    this.factory.factoryCountry = decodeURI(this.factory.country);
  }

  deleteItem(factory) {
    if (confirm('Do you really want to delete this factory?')) {
      this.delete.emit(factory);
    }
  }

  showCurrentForm(factory) {
    this.showForm.emit(factory);
  }

  updateItem(factory) {
    factory.editing = false;
    this.update.emit(factory);

  }
}
