import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IPost } from './IPost';

@Component({
    selector: 'blogpost', 
    templateUrl: './BlogPost.html'
})
export class BlogPostComponent implements OnInit {
    public postForm: FormGroup; 
    ngOnInit(): void {
        // 루트 폼 그룹 
        this.postForm = new FormGroup({
            title: new FormControl(),
            content: new FormControl(),
            blogId: new FormControl(1) 
        }); 
    }
    btnSave_Click(): void {
        console.log(this.postForm.value);
    }
}
