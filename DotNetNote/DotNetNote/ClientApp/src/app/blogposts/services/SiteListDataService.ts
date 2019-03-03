import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';

@Injectable()
export class SiteListDataService { 
    techLists = [
        {
            "id": 1, "title": "데브렉",
            "url": "http://www.devlec.com", "description": "데브렉"
        },
        {
            "id": 2, "title": "앵귤러노트",
            "url": "http://angularnote.azurewebsites.net", "description": "앵귤러노트"
        }
    ];

    getTechLists(): Observable<any[]> {
        return of(this.techLists).delay(3000).do(() => {
            console.log('데이터 가져오기...');
        });
    }
}
