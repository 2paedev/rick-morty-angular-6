import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Character } from '../common/character';
import { CharacterApiService } from '../../common/services/character-api.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent implements OnInit {
  @Input() character: Character;

  constructor(
    private route: ActivatedRoute,
    private apiService: CharacterApiService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getCharacter();
  }

  getCharacter(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getCharacter(id).subscribe(response => (this.character = response));
  }

  goBack(): void {
    this.location.back();
  }
}
