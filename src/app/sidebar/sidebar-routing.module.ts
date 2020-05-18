import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoapComponent } from '../soap/soap.component';

const routes: Routes = [
  { path: '', redirectTo: '/soap', pathMatch: 'full' },
  { path: 'soap', component: SoapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class SidebarRoutingModule {}
