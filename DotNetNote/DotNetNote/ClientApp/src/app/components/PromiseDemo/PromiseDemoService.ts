import { Injectable } from '@angular/core';

@Injectable()
export class PromiseDemoService {
    getData(): Promise<any[]> {
        //return [{ id: 1, name: "홍길동" }, { id: 2, name: "백두산" }];
        
        //return new Promise<any[]>(resolve => {
        //    return resolve(
        //        [{ id: 1, name: "홍길동" }, { id: 2, name: "백두산" }]
        //    );
        //});

        return new Promise<any[]>(resolve => {
            setTimeout(() => {
                resolve(
                    [{ id: 1, name: "홍길동" }, { id: 2, name: "백두산" }]
                );
            }, 2000); 
        });
    }
}

