import { Component, OnInit } from '@angular/core';

import { SidebarService } from '../core/services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {}

  toggleSideNav() {
    this.sidebarService.sidebarToggle();
  }
}
