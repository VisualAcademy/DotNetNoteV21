import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    title = "연락처";
    message = "안녕하세요. AngularNote 사이트입니다.";

  constructor() { }

  ngOnInit() {
  }

}
