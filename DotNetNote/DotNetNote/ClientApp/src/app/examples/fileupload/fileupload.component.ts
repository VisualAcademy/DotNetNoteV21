// Angular CLI
// Visual Studio 
import { Component } from '@angular/core';

@Component({
    selector: "fileupload",
    templateUrl: './fileupload.component.html'
})
export class FileUploadComponent {
    // Click 이벤트
    btnSubmit_Click() {
        console.log('전송 버튼 클릭됨');
    }
    // Change 이벤트
    imgFile_Changed() {
        console.log('파일 업로드 필드 변경');
    }
    // Submit 이벤트
    frm_Submit() {
        console.log("폼 전송 이벤트"); 
    }
}
