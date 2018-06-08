import { NgModule } from '@angular/core';
import { SharedModule } from '../common/shared.module';
import { routedComponents, CharacterRoutingModule } from './character-routing.module';
import { CharacterFilterComponent } from './filter/character-filter.component';

@NgModule({
  imports: [SharedModule, CharacterRoutingModule],
  declarations: [routedComponents, CharacterFilterComponent]
})
export class CharacterModule {}
