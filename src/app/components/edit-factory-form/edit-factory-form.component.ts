import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-factory-form',
  templateUrl: './edit-factory-form.component.html',
  styleUrls: ['./edit-factory-form.component.css']
})
export class EditFactoryFormComponent implements OnInit {
  @Input() factory: any;
  @Output() update = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  edit(factory) {
    this.update.emit(factory);
  }
}
