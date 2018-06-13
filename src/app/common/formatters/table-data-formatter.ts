import { Injectable } from '@angular/core';

import { BaseResponse } from '../interfaces/base-response';

@Injectable({
  providedIn: 'root',
})
export class TableDataFormatter {
  formatDataTable(data: BaseResponse) {
    const dataFormatted = {
      tableHead: [],
      tableBody: [],
    };
    let isFillTHead = false;
    data.results.forEach((item, index) => {
      if (!isFillTHead) {
        dataFormatted.tableHead = this.initTableHead();
        isFillTHead = true;
      }
      dataFormatted.tableBody[index] = this.formatRowBody(item);
    });
    return dataFormatted;
  }

  initTableHead() {
    const tHead = ['Id', 'Name', 'Gender', 'Status', 'Species', 'Type'];
    return tHead;
  }

  formatRowBody(data) {
    const rowBodyFormatted = {
      rowBody: [],
    };
    rowBodyFormatted.rowBody.push(this.formatItem(data.id.toString(), true));
    rowBodyFormatted.rowBody.push(this.formatItem(data.name, false));
    rowBodyFormatted.rowBody.push(this.formatItem(data.gender, false));
    rowBodyFormatted.rowBody.push(this.formatItem(data.status, false));
    rowBodyFormatted.rowBody.push(this.formatItem(data.species, false));
    rowBodyFormatted.rowBody.push(this.formatItem(data.type, false));

    return rowBodyFormatted;
  }

  formatItem(itemValue: string, isTh: boolean) {
    const itemFormatted = {
      text: itemValue,
      isTh: isTh,
    };
    return itemFormatted;
  }
}
