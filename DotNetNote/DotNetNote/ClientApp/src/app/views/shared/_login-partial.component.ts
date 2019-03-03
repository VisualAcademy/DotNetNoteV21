import { Component } from "@angular/core";
import { SignService } from "../../sign/sign.service";

@Component({
    selector: "login-partial",
    templateUrl: "_login-partial.component.html",
    providers: [
        SignService
    ]
})
export class LoginPartialComponent {
    constructor(public signService: SignService) {
    }
}
