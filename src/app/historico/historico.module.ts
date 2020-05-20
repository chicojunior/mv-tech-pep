import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { HistoricoComponent } from './historico.component';

@NgModule({
  declarations: [HistoricoComponent],
  imports: [CommonModule, MatExpansionModule, MatButtonModule, MatIconModule],
  exports: [HistoricoComponent],
})
export class HistoricoModule {}
