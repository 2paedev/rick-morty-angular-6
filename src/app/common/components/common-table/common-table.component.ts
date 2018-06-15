import { Component, Input, OnInit, EventEmitter } from "@angular/core";

import { ITableSource } from "../../interfaces/table-source";

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnInit {

  @Input() dataSource: ITableSource;
  reorderable = true;
  isLoaded = false;
  editing = {};
  rows = [];

  constructor() { }

  ngOnInit() { }

  dataIsLoaded() {
    this.isLoaded = false;
    if (this.dataSource && !this.isLoaded) {
      this.isLoaded = true;
      this.rows = this.dataSource.rows;
    }
    return this.isLoaded;
  }

  updateValue(event, cell, rowIndex) {
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }

  checkGroup(event, row) {
    row.selected = 0;

    if (event.target.checked)
      if (event.target.value === '0') {
        row.selected = 1;
      }
  }

}
