import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioModule } from '../usuario/usuario.module';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, UsuarioModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
