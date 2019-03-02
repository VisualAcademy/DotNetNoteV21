import { Component, OnInit } from '@angular/core';

import { ImageUploadFormProcessService } from './imageuploadformprocess.service';

@Component({
    selector: "imageuploadform",
    templateUrl: "./imageuploadformprocess.component.html"
})
export class ImageUploadFormProcessComponent implements OnInit {

    imgUrl: string = "/images/dummy_people.png";

    imgFile: File; 

    frm: any;

    constructor(private ds: ImageUploadFormProcessService) {

    }

    ngOnInit() {

    }

    imgFile_Changed(files: FileList) {
        this.imgFile = files.item(0); 

        var reader = new FileReader();
        reader.onload = (event: any) => {
            this.imgUrl = event.target.result; 
        }
        reader.readAsDataURL(this.imgFile); 
    }

    btnUpload_Submit(frm: any) {
        this.frm = frm.txtName; 

        this.ds.postFile(frm.txtName, this.imgFile).subscribe(data => {
            console.log('완료');
        });
    }
}

