export interface ITableSource {
  columns: ColumnTable[];
  rows: RowTable[];
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
