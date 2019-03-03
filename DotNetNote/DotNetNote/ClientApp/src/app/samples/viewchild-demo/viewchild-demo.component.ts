import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-viewchild-demo',
    templateUrl: './viewchild-demo.component.html',
    styleUrls: ['./viewchild-demo.component.css']
})
export class ViewchildDemoComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    @ViewChild("txtInput") txtInput; 

    btnInput_Click() {
        // 텍스트 박스의 값을 템플릿 참조 변수(#)를 사용하여 
        // 코드 비하인드 페이지에서 사용할 때
        alert(this.txtInput.nativeElement.value);
    }
}
