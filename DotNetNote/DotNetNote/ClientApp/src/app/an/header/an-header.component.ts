import { Component } from '@angular/core';
import { SignService } from '../../sign/sign.service';

@Component({
    selector: 'an-header',
    templateUrl: './an-header.component.html',
    providers: [
        SignService
    ]
})
export class AnHeaderComponent {
    constructor(public signService: SignService) {
    }
}
