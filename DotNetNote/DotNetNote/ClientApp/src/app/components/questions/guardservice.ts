import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router }
    from '@angular/router';

@Injectable()
export class QuestionGuardService implements CanActivate {
    constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot): boolean {
        // id값을 받아서 숫자형인지 판단
        let id = +route.url[1].path; // /url[0]/url[1]/url[2] 
        if (isNaN(id)) {
            this.router.navigate(['/question']);
            return false;
        }
        return true;
    }
}
