import { Injectable } from '@angular/core';

@Injectable()
export class ServiceDemoService {
    getData() {
        return [{ id: 1, name: "홍길동" }, { id: 2, name: "백두산" }];
    }
}
