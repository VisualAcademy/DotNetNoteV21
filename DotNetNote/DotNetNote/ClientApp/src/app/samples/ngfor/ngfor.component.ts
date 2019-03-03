import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

    // colors ¼Ó¼º
    public colors = [
        "red", "green", "blue"
    ];

  constructor() { }

  ngOnInit() {
  }

}
