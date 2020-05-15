import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoricoModule } from '../historico/historico.module';

import { SoapComponent } from './soap.component';
@NgModule({
  declarations: [SoapComponent],
  imports: [CommonModule, HistoricoModule],
  exports: [SoapComponent],
})
export class SoapModule {}
