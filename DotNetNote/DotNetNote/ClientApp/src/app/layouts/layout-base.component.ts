import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-base',
  template: 'Simple<br /><router-outlet></router-outlet>',
  styleUrls: ['./layout-base.component.css']
})
export class LayoutBaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
