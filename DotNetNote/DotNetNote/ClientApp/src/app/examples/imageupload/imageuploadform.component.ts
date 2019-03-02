import { Component, OnInit } from '@angular/core';

@Component({
    selector: "imageuploadform",
    templateUrl: "./imageuploadform.component.html"
})
export class ImageUploadFormComponent implements OnInit {

    imgUrl: string = "/images/dummy_people.png";

    imgFile: File; 

    constructor() {

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
}
