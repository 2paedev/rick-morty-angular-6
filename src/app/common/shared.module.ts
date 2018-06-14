import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule],
  exports: [
    CommonModule,
    // SharedModule importers won't have to import FormsModule too
    FormsModule,
  ],
  declarations: [],
})
export class SharedModule {}
