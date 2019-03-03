import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router }
    from '@angular/router';

@Injectable()
export class FiveDetailGuard implements CanActivate {
    constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[1].path;
        if (isNaN(id)) {
            this.router.navigate(['/five']);
            return false;
        }
        return true;
    }
}
