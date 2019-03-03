import { Component } from '@angular/core';

import { TechListDataService } from './TechListDataService';

@Component({
    selector: "tech-list",
    templateUrl: './TechListViewComponent.html'
})
export class TechListViewComponent {
    // public techLists = [
    //     { "id": 1, "title": "Angular"},
    //     { "id": 2, "title": "ASP.NET Core"},
    //     { "id": 3, "title": "Azure Web App"},
    // ];    
    techLists : any[] = []; 
    isBusy = true; 
    constructor(private _techSvc: TechListDataService) {
        //this.techLists = _techSvc.getTechLists(); 
        _techSvc.getTechLists().then(t => {
            this.techLists = t; 
            this.isBusy = false; 
        });
    }
}
