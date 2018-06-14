import { Component, OnInit } from "@angular/core";

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

  constructor(
    private tableDataFormatter: TableDataFormatter,
    private characterApiService: CharacterApiService
  ) {}

  ngOnInit() {
    this.characterApiService.getCharacters().subscribe(response => {
      this.dataSourceTable = this.tableDataFormatter.formatDataTable(response);
    });
  }

  // getPrevPage() {
  //   if (this.dataSourceTable) {
  //     this.characterApiService
  //       .getCharacters(this.dataSourceTable.prevPage)
  //       .subscribe(response => {
  //         this.dataSourceTable = this.tableDataFormatter.formatDataTable(response);
  //       });
  //   }
  // }

  // getNextPage() {
  //   if (this.dataSourceTable) {
  //     this.characterApiService
  //       .getCharacters(this.dataSourceTable.nextPage)
  //       .subscribe(response => {
  //         this.dataSourceTable = this.tableDataFormatter.formatDataTable(response);
  //       });
  //   }
  // }
}
