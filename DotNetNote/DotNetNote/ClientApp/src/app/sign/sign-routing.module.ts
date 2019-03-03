import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { SignDetailsComponent } from './details/details.component';
import { AuthorizeGuard } from './authorize.guard';

const routes: Routes = [
    {
        path: '',
        data: {
            title: '인증'
        },
        children: [
            {
                path: 'login',
                component: LoginComponent,
                data: {
                    title: '로그인'
                }
            },
            {
                path: 'logout',
                component: LogoutComponent,
                data: {
                    title: '로그인'
                }
            },
            {
                path: 'register',
                component: RegisterComponent,
                data: {
                    title: '로그인'
                }
            },
            {
                path: 'details',
                component: SignDetailsComponent,
                data: {
                    title: '로그인'
                },
                canActivate: [AuthorizeGuard]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SignRoutingModule { }
