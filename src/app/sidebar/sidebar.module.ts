import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';

import { SidebarRoutingModule } from './sidebar-routing.module';
import { SoapModule } from '../soap/soap.module';
import { PacienteModule } from '../paciente/paciente.module';

import { SidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    SidebarRoutingModule,
    SoapModule,
    PacienteModule,
  ],
  exports: [SidebarComponent],
})
export class SidebarModule {}
