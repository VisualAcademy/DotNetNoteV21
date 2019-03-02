import { Component } from '@angular/core';

@Component({
    selector: "fileuploadtest",
    templateUrl: './fileuploadtest.component.html'
})
export class FileUploadTestComponent {
    // 파일 필드에서 첨부한 파일은 File 개체에 담아서 사용
    imgFile: File; 

    imgFile_Changed(event) {
        // console.log(event); // 전체 출력
        this.imgFile = <File>event.target.files[0];
        console.log(this.imgFile);
        console.log(this.imgFile.name);
        console.log(this.imgFile.size);
        console.log(this.imgFile.type);
    }

    btnSubmit_Click() {
        console.log(this.imgFile);
    }

    frm_Submit() {
        console.log("폼 전송 이벤트"); 
    }
}
