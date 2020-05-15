import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteComponent } from './paciente.component';

@NgModule({
  declarations: [PacienteComponent],
  imports: [CommonModule],
  exports: [PacienteComponent],
})
export class PacienteModule {}
