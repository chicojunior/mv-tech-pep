import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { SidebarRoutingModule } from './sidebar-routing.module';
import { SoapModule } from '../soap/soap.module';
import { PacienteModule } from '../paciente/paciente.module';

import { SidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    SidebarRoutingModule,
    SoapModule,
    PacienteModule,
  ],
  exports: [SidebarComponent],
})
export class SidebarModule {}
