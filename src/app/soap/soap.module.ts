import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { CardModule } from '../card/card.module';
import { HistoricoModule } from '../historico/historico.module';

import { SoapComponent } from './soap.component';

@NgModule({
  declarations: [SoapComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatDividerModule,
    CardModule,
    HistoricoModule,
  ],
  exports: [SoapComponent],
})
export class SoapModule {}
