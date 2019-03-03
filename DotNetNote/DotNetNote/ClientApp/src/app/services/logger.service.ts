import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
    log(message: string): void {
        const timeStamp: string = new Date().toLocaleDateString();
        console.log(`${message} - ${timeStamp}`);
    }

    error(message: string): void {
        console.error(`{message}`);
    }
}
