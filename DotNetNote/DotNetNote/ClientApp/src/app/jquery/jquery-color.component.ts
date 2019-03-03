import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

//declare var jQuery: any;
//declare var $: any;

@Component({
    selector: 'app-jquery-color',
    templateUrl: './jquery-color.component.html',
    styleUrls: ['./jquery-color.component.css']
})
export class JqueryColorComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    changeColor() {
        console.log('Å¬¸¯');
        $("h1").css("color", "red").hide(3000).show(3000);
    }

}
