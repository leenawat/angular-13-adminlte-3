import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-full',
  templateUrl: './main-full.component.html',
  styleUrls: ['./main-full.component.css']
})
export class MainFullComponent implements OnInit {
  public sidebarMenuOpened = true;
  public menu = MENU;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenuSidebar() {
    if (this.sidebarMenuOpened) {
      document.querySelector('body')?.classList.remove('sidebar-open');
      document.querySelector('body')?.classList.add('sidebar-collapse');
      this.sidebarMenuOpened = false;
    } else {
      document.querySelector('body')?.classList.remove('sidebar-collapse');
      document.querySelector('body')?.classList.add('sidebar-open');
      this.sidebarMenuOpened = true;
    }
  }

}

export const MENU = [
  {
    name: 'Dashboard',
    path: ['/']
  },
  {
    name: 'Blank',
    path: ['/blank']
  },
  {
    name: 'Main Menu',
    children: [
      {
        name: 'Sub Menu 1',
        path: ['/sub-menu-1']
      },

      {
        name: 'Sub Menu 2',
        path: ['/sub-menu-2']
      }
    ]
  }
];