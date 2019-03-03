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
        // �ؽ�Ʈ �ڽ��� ���� ���ø� ���� ����(#)�� ����Ͽ� 
        // �ڵ� �����ε� ���������� ����� ��
        alert(this.txtInput.nativeElement.value);
    }
}
