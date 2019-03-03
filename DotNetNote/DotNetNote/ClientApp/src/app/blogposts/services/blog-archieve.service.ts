import { Injectable } from '@angular/core';

@Injectable()
export class BlogArchieveService {
    getArchieves() {
        return [
            { strDate: '201803', intCount: 7 },
            { strDate: '201804', intCount: 11 },
        ];
    }
}
