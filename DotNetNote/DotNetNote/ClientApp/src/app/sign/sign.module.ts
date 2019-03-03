import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignRoutingModule } from './sign-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignService } from './sign.service';
import { SignDetailsComponent } from './details/details.component';
import { AuthorizeGuard } from './authorize.guard';

@NgModule({
    imports: [
        CommonModule,
        SignRoutingModule,
        FormsModule, ReactiveFormsModule
    ],
    declarations: [
        RegisterComponent,
        LoginComponent,
        LogoutComponent,
        SignDetailsComponent
    ],
    providers: [SignService, AuthorizeGuard]
})
export class SignModule { }
