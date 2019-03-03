import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-four',
  template: 'Four<br /><router-outlet></router-outlet>'
})
export class LayoutFourComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
