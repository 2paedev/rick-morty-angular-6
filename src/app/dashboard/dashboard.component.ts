import { Component, OnInit } from "@angular/core";
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { TableDataFormatter } from "../common/formatters/table-data-formatter";
import { ITableSource } from "../common/interfaces/table-source";
import { CharacterApiService } from "../common/services/character-api.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  dataSourceTable: ITableSource;
  dataTableTemporal = [];

  now = new Date();
  model: NgbDateStruct;
  date: { year: number, month: number };

  constructor(
    private tableDataFormatter: TableDataFormatter,
    private characterApiService: CharacterApiService
  ) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.characterApiService.getCharacters().subscribe(response => {
      this.dataSourceTable = this.tableDataFormatter.formatDataTable(response);
      this.dataTableTemporal = this.dataSourceTable.rows;
    });
  }

  getCharactersPaginated(pageNumber) {
    this.characterApiService
      .getCharactersPaginated(pageNumber)
      .subscribe(response => {
        this.dataSourceTable = this.tableDataFormatter.formatDataTable(
          response
        );
      });
  }

  updateFilterByName(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.dataTableTemporal.filter(d => {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.dataSourceTable.rows = temp;
  }

  updateFilterByGender(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.dataTableTemporal.filter(d => {
      return d.gender.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.dataSourceTable.rows = temp;
  }

  updateFilterBySpecies(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.dataTableTemporal.filter(d => {
      return d.species.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.dataSourceTable.rows = temp;
  }

  selectToday() {
    this.model = { year: this.now.getFullYear(), month: this.now.getMonth() + 1, day: this.now.getDate() };
  }
}
