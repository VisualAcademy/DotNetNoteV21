import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router }
    from '@angular/router';

@Injectable() 
export class RoutingViewGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[1].path;

        if (isNaN(id)) {
            //alert();
            this.router.navigate(['/routinglist']);
            return false; 
        }

        return true; 
    }
}
