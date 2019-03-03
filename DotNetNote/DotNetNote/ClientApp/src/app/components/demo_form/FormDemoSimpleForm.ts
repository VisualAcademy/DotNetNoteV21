import { Component } from '@angular/core';
import { Note } from '../models/Note';

// app.module.ts => import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
    selector: "formdemo-simpleform",
    templateUrl: './FormDemoSimpleForm.html'
})
export class FormDemoSimpleFormComponent {
    public encodings = ["Text", "HTML", "Mixed"]; 

    public vm = new Note("이름", "제목", "내용", "HTML", true, "No");

}
