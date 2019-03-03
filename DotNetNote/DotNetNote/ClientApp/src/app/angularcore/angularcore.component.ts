import { Component } from '@angular/core';

@Component({
    selector: 'angularcore',
    template: `
        <h2>안녕하세요. {{name}} - app.component.ts</h2> 
        <home-welcome></home-welcome>
        <about-about></about-about>
        <contact-contact></contact-contact>
        <hr />
        <product-productlist></product-productlist>
    `
})
export class AngularCoreComponent {
    name: string = "앵귤러";
}
