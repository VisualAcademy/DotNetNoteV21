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
            title: '����'
        },
        children: [
            {
                path: 'login',
                component: LoginComponent,
                data: {
                    title: '�α���'
                }
            },
            {
                path: 'logout',
                component: LogoutComponent,
                data: {
                    title: '�α���'
                }
            },
            {
                path: 'register',
                component: RegisterComponent,
                data: {
                    title: '�α���'
                }
            },
            {
                path: 'details',
                component: SignDetailsComponent,
                data: {
                    title: '�α���'
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
