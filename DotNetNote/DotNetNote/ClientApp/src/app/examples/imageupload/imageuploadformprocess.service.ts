import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ImageUploadFormProcessService {
    constructor(private http: Http) {
        
    }

    postFile(name: string, files: File) {
        const endpoint = "/api/WebApiFileUpload";
        const formData: FormData = new FormData(); 

        formData.append('name', name);
        formData.append('files', files, files.name); 
        return this.http.post(endpoint, formData); 
    }
}
