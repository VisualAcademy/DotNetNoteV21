import { Component } from '@angular/core';

// Angular 컴포넌트에서 jQuery 사용하기
declare var jquery: any;
declare var $: any;

@Component({
    selector: "jqueryslidetoggle",
    templateUrl: './jquery.slidetoggle.component.html'
})
export class JquerySlideToggleComponent {
    title = "Angular 4와 jQuery";

    btn_Click() {
        $(".title").slideToggle(); // jQuery API 호출
    }
}
