export interface TableSource {
  columns: ColumnTable[];
  rows: RowTable[];
}

class RowTable {
  id: Number;
  name: String;
  gender: String;
  species: String;
}

class ColumnTable {
  name: String;
}
