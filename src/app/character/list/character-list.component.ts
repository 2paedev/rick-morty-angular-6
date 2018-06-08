import { Component, OnInit } from '@angular/core';

import { Character } from '../common/character';
import { CharacterApiService } from '../common/character-api.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters: Character[];
  prevPageUrl: string;
  nextPageUrl: string;
  totalPages: number;
  totalResults: number;
  title = 'Characters list';

  constructor(private apiService: CharacterApiService) {}

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(): void {
    this.apiService.getCharacters().subscribe(response => {
      this.formatResponse(response);
    });
  }

  goPrevPage(): void {
    this.apiService.getCharacters(this.prevPageUrl).subscribe(response => this.formatResponse(response));
  }

  goNextPage(): void {
    this.apiService.getCharacters(this.nextPageUrl).subscribe(response => this.formatResponse(response));
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
