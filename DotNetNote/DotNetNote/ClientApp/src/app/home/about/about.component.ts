import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    title = "정보";
    message = "안녕하세요. AngularNote 사이트입니다.";

  constructor() { }

  ngOnInit() {
  }

}
