import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IPost } from './IPost';
@Component({
    selector: 'postmodify',
    templateUrl: "./PostModify.html"
})
export class PostModifyComponent implements OnInit {
    // 모델 개체
    public postForm: FormGroup;
    constructor(private fb: FormBuilder) { }
    ngOnInit(): void {
        this.postForm = this.fb.group({
            title: '',
            content: { value: '', disabled: false },
            blogId:1
        }); 
    }
    btnSave_Click(): void {
        console.log(this.postForm.value);
    }
    displayData(): void {
        //this.postForm.setValue({
        //    title: '샘플 제목',
        //    content: '샘플 내용\n샘플 내용\n',
        //    blogId: 1
        //});
        this.postForm.patchValue({
            title: '샘플 제목',
            content: '샘플 내용\n샘플 내용\n'
        });
    }
}
