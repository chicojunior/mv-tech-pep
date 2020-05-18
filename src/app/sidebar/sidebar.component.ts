import { Component, OnInit } from '@angular/core';

import {
  mainContentAnimation,
  sidebarAnimation,
  iconAnimation,
  labelAnimation,
} from '../animations';

import { SidebarService } from '../core/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    mainContentAnimation(),
    sidebarAnimation(),
    iconAnimation(),
    labelAnimation(),
  ],
})
export class SidebarComponent implements OnInit {
  statusSidebar: string;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    this.sidebarService.sidebarStatus.subscribe((status: string) => {
      this.statusSidebar = status;
    });
  }
}
