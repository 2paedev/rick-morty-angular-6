import { Injectable } from "@angular/core";

import { Character } from "../../character/common/character";
import { IBaseResponse, Info } from "../interfaces/base-response";

@Injectable({
  providedIn: "root"
})
export class TableDataFormatter {
  formatDataTable(data: IBaseResponse) {
    const dataFormatted = {
      rows: [],
      columns: [],
      infoPage: new Info()
    };
    dataFormatted.columns = [
      { name: "Id" },
      { name: "Name" },
      { name: "Gender" },
      { name: "Species" }
    ];
    data.results.forEach((item, index) => {
      dataFormatted.rows[index] = this.formatRow(item);
    });

    dataFormatted.infoPage = this.formatInfoPage(data);
    return dataFormatted;
  }

  formatRow(character: Character) {
    const itemFormatted = {
      id: character.id.toString(),
      name: character.name,
      gender: character.gender,
      species: character.species
    };
    return itemFormatted;
  }

  formatInfoPage(data: IBaseResponse) {
    return data.info;
  }
}
