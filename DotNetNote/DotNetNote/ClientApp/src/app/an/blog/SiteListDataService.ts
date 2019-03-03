import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable'; 
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';

@Injectable() 
export class SiteListDataService {

    techLists = [
        {
            "id": 1, "title": "Angular (Angular 공식 사이트)",
            "url": "http://angular.io", "description": "Angular (Angular 공식 사이트)"
        },
        {
            "id": 2, "title": "데브렉 (AngularNote 사이트 제작 관련 동영상 강의 제공)",
            "url": "http://www.devlec.com", "description": "데브렉 (AngularNote 사이트 제작 관련 동영상 강의 제공)"
        },
        {
            "id": 1, "title": "비주얼아카데미 (박용준 MVP 개인 유튜브 채널)",
            "url": "https://www.youtube.com/user/visualacademy", "description": "비주얼아카데미 (박용준 MVP 개인 유튜브 채널)"
        },
        {
            "id": 1, "title": "Taeyo.NET (ASP.NET Core 강좌 제공)",
            "url": "http://www.taeyo.net", "description": "Taeyo.NET (ASP.NET Core 강좌 제공)"
        },
        {
            "id": 1, "title": "ASP.NET Korea User Group (ASP.NET 한국 사용자 그룹)",
            "url": "https://www.facebook.com/groups/AspxKorea/", "description": "ASP.NET Korea User Group (ASP.NET 한국 사용자 그룹)"
        },
        {
            "id": 1, "title": "닷넷코리아 (박용준 MVP 개인 홈페이지)",
            "url": "http://www.dotnetkorea.com", "description": "닷넷코리아 (박용준 MVP 개인 홈페이지)"
        },
        {
            "id": 1, "title": "ASP.NET (ASP.NET 공식 사이트)",
            "url": "http://www.asp.net", "description": "ASP.NET (ASP.NET 공식 사이트)"
        },
        {
            "id": 1, "title": "길벗출판사 (ASP.NET Core 서적 출간)",
            "url": "http://www.gilbut.co.kr", "description": "길벗출판사 (ASP.NET Core 서적 출간)"
        }
    ];        

    getTechLists(): Observable<any[]> {
        return of(this.techLists).delay(3000).do(() => {
            console.log('데이터 가져오기...');
        });
    }
}
