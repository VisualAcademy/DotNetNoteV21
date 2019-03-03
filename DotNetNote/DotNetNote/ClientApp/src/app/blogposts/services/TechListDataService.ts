// 서비스 클래스 
import { Injectable } from '@angular/core';

@Injectable()
export class TechListDataService {
    getTechLists(): Promise<any[]> {
        let techLists = [
            { "id": 1, "title": "Angular" },
            { "id": 2, "title": "ASP.NET Core" },
            { "id": 3, "title": "Azure Web App" },
            { "id": 4, "title": "Bootstrap" },
            { "id": 5, "title": "C#" },
        ];
        // return new Promise<any[]>(resolve => {
        //     resolve(techLists);
        // }); 
        return new Promise<any[]>(resolve => {
            setTimeout(() => {
                resolve(techLists);
            }, 2000); // 2초 딜레이
        });
    }
}
