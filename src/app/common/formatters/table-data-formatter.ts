import { Injectable } from '@angular/core';

import { BaseResponse } from '../interfaces/base-response';
import { Character } from '../../character/common/character';

@Injectable({
  providedIn: 'root',
})
export class TableDataFormatter {
  formatDataTable(data: BaseResponse) {
    const dataFormatted = {
      rows: [],
      columns: [],
    };
    dataFormatted.columns = [
      { name: 'Id' },
      { name: 'Name' },
      { name: 'Gender' },
      { name: 'Species' },
    ];
    data.results.forEach((item, index) => {
      dataFormatted.rows[index] = this.formatRow(item);
    });

    return dataFormatted;
  }

  formatRow(character: Character) {
    const itemFormatted = {
      id: character.id.toString(),
      name: character.name,
      gender: character.gender,
      species: character.species,
    };
    return itemFormatted;
  }
}
