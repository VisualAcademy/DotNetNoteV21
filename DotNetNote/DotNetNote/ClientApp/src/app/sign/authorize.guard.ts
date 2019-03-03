import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router }
    from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SignService } from './sign.service';

@Injectable()
export class AuthorizeGuard implements CanActivate {
    constructor(private ss: SignService, private router: Router) {

    }

    canActivate(
        route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        boolean | Observable<boolean> | Promise<boolean> {

        // 로그인한 사용자면 true 반환
        if (this.ss.isAuthenticated) {
            return true;
        }
        else {
            // 로그인 페이지로 이동
            // this.router.navigate(['/sign/login']);
            this.router.navigate(['/sign/login'],
                { queryParams: { returnUrl: state.url } });
            return false; 
        }
    }
}
