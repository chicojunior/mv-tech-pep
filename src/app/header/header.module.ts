import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

import { UsuarioModule } from '../usuario/usuario.module';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatToolbarModule, UsuarioModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
