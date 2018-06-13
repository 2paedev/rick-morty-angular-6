import { Component, OnInit } from '@angular/core';

import { TableSource } from '../common/interfaces/table-source';
import { CharacterApiService } from '../common/services/character-api.service';
import { TableDataFormatter } from '../common/formatters/table-data-formatter';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dataSourceTable: TableSource;

  constructor(
    private tableDataFormatter: TableDataFormatter,
    private characterApiService: CharacterApiService
  ) {}

  ngOnInit() {
    this.characterApiService.getCharacters().subscribe(response => {
      this.dataSourceTable = this.tableDataFormatter.formatDataTable(response);
    });
  }
}
