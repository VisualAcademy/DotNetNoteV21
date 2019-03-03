import { Component, OnInit } from '@angular/core';

import { IRanking } from './IRanking'; // 강력한 형식으로 타입 체크

import { RankingService } from './RankingService'; // 서비스 클래스

import { Http } from '@angular/http';

@Component({
    selector: 'MyRanking',
    templateUrl: './MyRanking.component.html',
    styles: ['h2 { text-decoration:underline; }'],
    providers: [ RankingService ] // 서비스 클래스 등록 
})
export class MyRankingComponent implements OnInit {
    public title: string = "성적 리스트";
    public rankings: IRanking[];
    public foreColor: string = "red";
    public btnChange_Click(): void {
        this.foreColor = (this.foreColor === 'red') ? 'blue' : 'red';
    }
    ngOnInit(): void {
        console.log("페이지 초기화(로드) 이벤트 처리기");
        //this.rankings = [
        //    { id: 1, name: "홍길동", rank: 1, rankImage: "One.gif" },
        //    { id: 2, name: "백두산", rank: 2, rankImage: "Two.gif" },
        //    { id: 3, name: "임꺽정", rank: 3, rankImage: "Three.gif" },
        //    { id: 4, name: "한라산", rank: 4, rankImage: "" },
        //];
        //this.rankings = this._rankingService.getRankings();
    }
    //private _rankingService; 
    // 생성자를 통한 서비스 클래스 주입
    constructor(private _rankingService: RankingService, private _http: Http) {
        //this.rankings = _rankingService.getRankings();
        _http.get("/api/RankingService").subscribe(result => {
            this.rankings = <IRanking[]>result.json();
        });
    }
    
    showSubClicked(msg: any) {
        console.log(msg); 
    }
}
