import { Component } from '@angular/core';
import { SiteListDataService } from '../services/SiteListDataService';

@Component({
    selector: 'site-list',
    templateUrl: './SiteListViewComponent.html'
})
export class SiteListViewComponent {
    sites: any[] = [];
    isBusy = true;
    constructor(private _siteSvc: SiteListDataService) {
        this._siteSvc.getTechLists().subscribe(sites => {
            this.sites = sites;
            this.isBusy = false;
        });
    }
}
