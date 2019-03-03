import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    ViewBag: any = { "SiteName": "AngularNote", "SiteUrl": "http://angular.dul.me" };
}
