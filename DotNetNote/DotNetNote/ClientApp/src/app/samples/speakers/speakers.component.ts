import { Component, OnInit } from '@angular/core';
import { Speaker } from "./speaker";
import { SpeakersService } from './speakers.service';

@Component({
    selector: 'app-speakers',
    templateUrl: './speakers.component.html',
    styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {
    speakers: Speaker[] = [];

    constructor(private ds: SpeakersService) {
    }

    ngOnInit() {
        // 컴포넌트에서 직접 데이터 출력
        // this.speakers = [
        //   new Speaker(1, "홍길동"),
        //   new Speaker(2, "백두산"),
        //   new Speaker(3, "임꺽정")
        // ];  

        // 데이터를 서비스 클래스로부터 가져오기 
        this.speakers = this.ds.getSpeakers();
    }
}
