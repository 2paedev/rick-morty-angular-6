import { Info } from "./base-response";

export interface ITableSource {
  columns: ColumnTable[];
  rows: RowTable[];
  infoPage: Info;
}

class RowTable {
  id: number;
  name: string;
  gender: string;
  species: string;
}

class ColumnTable {
  name: string;
}
