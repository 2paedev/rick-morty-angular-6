import { Component, Input, OnInit, ViewChild } from "@angular/core";

import { ITableSource } from "../../interfaces/table-source";

@Component({
  selector: "app-common-table",
  templateUrl: "./common-table.component.html",
  styleUrls: ["./common-table.component.scss"]
})
export class CommonTableComponent implements OnInit {
  @Input() dataSource: ITableSource;
  temp = [];
  reorderable = true;
  isLoaded = false;

  constructor() {}

  ngOnInit() {}

  dataIsLoaded() {
    if (this.dataSource && !this.isLoaded) {
      this.temp = this.dataSource.rows;
      this.isLoaded = true;
    }
    return this.isLoaded;
  }

  updateFilterByName(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(d => {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.dataSource.rows = temp;
  }

  updateFilterByGender(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(d => {
      return d.gender.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.dataSource.rows = temp;
  }

  updateFilterBySpecies(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(d => {
      return d.species.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.dataSource.rows = temp;
  }
}
