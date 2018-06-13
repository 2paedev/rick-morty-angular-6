export interface TableSource {
  tableHead: String[];
  tableBody: TableBody[];
}

class TableBody {
  rowBody: RowBody[];
}
class RowBody {
  text: String;
  isTh?: Boolean;
}
