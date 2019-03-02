import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: "fileuploadtestfinal",
    templateUrl: './fileuploadtestfinal.component.html'
})
export class FileUploadTestFinalComponent {
    // 파일 필드에서 첨부한 파일은 File 개체에 담아서 사용
    imgFile: File; 

    constructor(private http: Http) {

    }

    imgFile_Changed(event) {
        this.imgFile = <File>event.target.files[0];
    }

    btnSubmit_Click() {
        // Web API 경로
        const API_URL = "/api/FileUploadTestFinal";

        // FormData 개체 
        var formData: FormData = new FormData(); 
        formData.append('imgFile', this.imgFile, this.imgFile.name);

        this.http.post(API_URL, formData).subscribe(res => {
            console.log(res); 
        }); 
    }
}
