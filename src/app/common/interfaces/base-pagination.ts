import { ITableSource } from "./table-source";

export class BasePagination {
  data: ITableSource;
  page: Page;
}

export class Page {
  size: number; //The number of elements in the page
  totalElements: number; //The total number of elements
  totalPages: number; //The total number of pages
  pageNumber: number; //The current page number
}
