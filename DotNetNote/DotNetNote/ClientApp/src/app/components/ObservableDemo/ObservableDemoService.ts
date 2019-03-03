import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';

@Injectable()
export class ObservableDemoService {
    getData(): Observable<IMember[]> {
        let data = [{ id: 1, name: "홍길동" }, { id: 2, name: "백두산" }];

        return of(data)
            .delay(2000)
            .do(() => {
                console.log('가져오기');
        });
    }
}

export interface IMember {
    id: number;
    name: string; 
}
