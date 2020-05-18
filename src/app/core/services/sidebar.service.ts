import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  sidebarState = 'open';
  sidebarBehaviourSubject = new BehaviorSubject<string>(this.sidebarState);
  sidebarStatus = this.sidebarBehaviourSubject.asObservable();

  constructor() {
    this.sidebarBehaviourSubject.next('open');
  }

  sidebarToggle() {
    this.sidebarState = this.sidebarState === 'open' ? 'closed' : 'open';
    this.sidebarBehaviourSubject.next(this.sidebarState);
  }
}
