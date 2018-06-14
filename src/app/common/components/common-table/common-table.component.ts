import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

import { ITableSource } from "../../interfaces/table-source";
import { BasePagination, Page } from "../../interfaces/base-pagination";

@Component({
  selector: "app-common-table",
  templateUrl: "./common-table.component.html",
  styleUrls: ["./common-table.component.scss"]
})
export class CommonTableComponent implements OnInit {
  @Input() dataSource: ITableSource;
  @Output() dataPagination = new EventEmitter();
  page = new Page();
  temp = [];
  reorderable = true;
  isLoaded = false;

  constructor() {
    this.page.pageNumber = 0;
    this.page.size = 20;
  }

  ngOnInit() {}

  dataIsLoaded() {
    if (this.dataSource && !this.isLoaded) {
      this.temp = this.dataSource.rows;
      this.setDataInPagination({ offset: 0 });
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

  setDataInPagination(pageInfo) {
    this.page.pageNumber = pageInfo.offset;
    this.page.totalElements = this.dataSource.infoPage.count;
    this.page.totalPages = this.dataSource.infoPage.pages;
    this.dataPagination.emit(this.page.pageNumber);
    // this.serverResultsService.getResults(this.page).subscribe(pagedData => {
    //   this.page = pagedData.page;
    //   this.rows = pagedData.data;
    // });
  }
}
