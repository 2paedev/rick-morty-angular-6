import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharacterDetailComponent } from './detail/character-detail.component';
import { CharacterListComponent } from './list/character-list.component';

const routes: Routes = [
  { path: '', component: CharacterListComponent },
  { path: ':id', component: CharacterDetailComponent }
];

export const routedComponents = [CharacterDetailComponent, CharacterListComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule {}
