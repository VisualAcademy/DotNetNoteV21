import { Injectable } from '@angular/core';

@Injectable()
export class BlogArchieveService {
    getArchieves() {
        return [
            {strDate:'201702', intCount: 7},
            {strDate:'201703', intCount: 11},
        ];        
    }    
}
