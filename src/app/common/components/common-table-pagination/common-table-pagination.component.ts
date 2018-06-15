import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

import { ITableSource } from "../../interfaces/table-source";
import { BasePagination, Page } from "../../interfaces/base-pagination";

@Component({
  selector: "app-common-table-pagination",
  templateUrl: "./common-table-pagination.component.html",
  styleUrls: ["./common-table-pagination.component.scss"]
})
export class CommonTablePaginationComponent implements OnInit {
  @Input() dataSource: ITableSource;
  @Output() dataPagination = new EventEmitter();
  page = new Page();
  reorderable = true;
  isLoaded = false;

  constructor() {
    this.page.pageNumber = 0;
    this.page.size = 20;
  }

  ngOnInit() {}

  dataIsLoaded() {
    if (this.dataSource && !this.isLoaded) {
      this.setDataInPagination({ offset: 0 });
      this.isLoaded = true;
    }
    return this.isLoaded;
  }

  setDataInPagination(pageInfo) {
    this.page.pageNumber = pageInfo.offset;
    this.page.totalElements = this.dataSource.infoPage.count;
    this.page.totalPages = this.dataSource.infoPage.pages;
    this.dataPagination.emit(this.page.pageNumber);
  }
}
