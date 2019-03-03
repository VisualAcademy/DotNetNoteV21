import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  template: `
  <h1>대시보드 레이아웃</h1>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class DashboardLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
