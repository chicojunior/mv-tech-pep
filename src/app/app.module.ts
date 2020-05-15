import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    SidebarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
