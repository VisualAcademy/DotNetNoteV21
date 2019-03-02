import { Component } from '@angular/core';

@Component({
    selector: "templatedrivendemo",
    templateUrl: './templatedrivendemo.component.html'
})
export class TemplateDrivenDemoComponent {
    vm: DemoModel = new DemoModel();

    constructor() { this.vm.id = 1, this.vm.note = "안녕하세요."; }

    //btnSave_Click() { console.log(`note는 ${this.vm.note} 입니다.`); }
    btnSave_Click(note: string) { console.log(`note는 ${note} 입니다.`); }
}

// ./DemoModel.ts
export class DemoModel {
    id: number; note: string;
}
