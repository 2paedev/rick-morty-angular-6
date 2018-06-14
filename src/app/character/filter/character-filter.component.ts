import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { FILTER_OPTIONS } from '../../common/constants';
import { CharacterApiService } from '../../common/services/character-api.service';

@Component({
  selector: 'app-character-filter',
  templateUrl: './character-filter.component.html',
  styleUrls: ['./character-filter.component.scss'],
})
export class CharacterFilterComponent implements OnInit {
  @Output() dataFiltered = new EventEmitter();
  filterOptions = [];
  selectedValue: string;
  filterName: string;
  labelToFilter: string;

  constructor(private apiService: CharacterApiService) {}

  ngOnInit() {
    this.setFilterOptions();
  }

  setFilterOptions() {
    this.filterOptions = [
      { name: FILTER_OPTIONS.NAME_TEXT, value: FILTER_OPTIONS.NAME_ID },
      { name: FILTER_OPTIONS.STATUS_TEXT, value: FILTER_OPTIONS.STATUS_ID },
      { name: FILTER_OPTIONS.SPECIES_TEXT, value: FILTER_OPTIONS.SPECIES_ID },
      { name: FILTER_OPTIONS.TYPE_TEXT, value: FILTER_OPTIONS.TYPE_ID },
      { name: FILTER_OPTIONS.GENDER_TEXT, value: FILTER_OPTIONS.GENDER_ID },
    ];
  }

  searchByNameFilter(event) {
    this.labelToFilter = this.getLabelToFilter();
    this.apiService
      .getCharactersFiltered(this.labelToFilter, this.filterName)
      .subscribe(response => this.dataFiltered.next(response));
  }

  getLabelToFilter() {
    if (this.selectedValue === FILTER_OPTIONS.NAME_ID) {
      return FILTER_OPTIONS.NAME_LABEL;
    }

    if (this.selectedValue === FILTER_OPTIONS.STATUS_ID) {
      return FILTER_OPTIONS.STATUS_LABEL;
    }

    if (this.selectedValue === FILTER_OPTIONS.SPECIES_ID) {
      return FILTER_OPTIONS.SPECIES_LABEL;
    }

    if (this.selectedValue === FILTER_OPTIONS.TYPE_ID) {
      return FILTER_OPTIONS.TYPE_LABEL;
    }

    if (this.selectedValue === FILTER_OPTIONS.GENDER_ID) {
      return FILTER_OPTIONS.GENDER_LABEL;
    }
  }

  isFilteredByName() {
    return this.selectedValue === FILTER_OPTIONS.NAME_ID;
  }

  isFilteredByStatus() {
    return this.selectedValue === FILTER_OPTIONS.STATUS_ID;
  }

  isFilteredBySpecies() {
    return this.selectedValue === FILTER_OPTIONS.SPECIES_ID;
  }

  isFilteredByType() {
    return this.selectedValue === FILTER_OPTIONS.TYPE_ID;
  }

  isFilteredByGender() {
    return this.selectedValue === FILTER_OPTIONS.GENDER_ID;
  }
}
