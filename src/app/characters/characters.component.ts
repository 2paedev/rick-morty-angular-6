import { Component, OnInit } from '@angular/core';

import { Character } from '../common/classes/character';
import { ApiService } from '../common/services/api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: Character[];
  prevPageUrl: string;
  nextPageUrl: string;
  totalPages: number;
  totalResults: number;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(): void {
    this.apiService.getCharacters()
      .subscribe(response => this.formatResponse(response));
  }

  goPrevPage(): void {
    this.apiService.getCharacters(this.prevPageUrl)
      .subscribe(response => this.formatResponse(response));
  }

  goNextPage(): void {
    this.apiService.getCharacters(this.nextPageUrl)
      .subscribe(response => this.formatResponse(response));
  }

  formatResponse(data): void {
    this.characters = data.results;
    this.nextPageUrl = data.info.next;
    this.prevPageUrl = data.info.prev;
    this.totalPages = data.info.pages;
    this.totalResults = data.info.count;
  }

  updateCharacters(dataEvent) {
    this.formatResponse(dataEvent);
  }

}
