// 서비스 클래스 
import { Injectable } from '@angular/core';

@Injectable()
export class TechListDataService {
    getTechLists(): Promise<any[]> {
        let techLists = [
            { "id": 1, "title": "Agile"},
            { "id": 2, "title": "Angular"},
            { "id": 3, "title": "ASP.NET Core"},
            { "id": 4, "title": "Azure Web App"},
            { "id": 5, "title": "Bootstrap"},
            { "id": 6, "title": "C#"},
            { "id": 7, "title": "Dapper"},
            { "id": 8, "title": "jQeury" }
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
