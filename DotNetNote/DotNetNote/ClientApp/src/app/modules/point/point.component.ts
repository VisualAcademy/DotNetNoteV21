import { Component, OnInit } from '@angular/core';

import { PointDataService } from "./point-data.service";
import { IPoint } from './model'

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.css']
})
export class PointComponent implements OnInit {
  model: IPoint = { point: 0 }; 
  constructor(private ds: PointDataService) { }

  ngOnInit() {
    this.getPoint(); 
  }

  getPoint() {
    this.ds.getPoint(1111).subscribe(
      (model: IPoint) => {
        let tmp = JSON.stringify(model);
        this.model = JSON.parse(tmp); 
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('포인트 가져오기 완료')
      }
    ); 
  }
}
