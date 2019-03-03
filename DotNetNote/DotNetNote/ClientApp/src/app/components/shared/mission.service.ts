// 서비스 클래스 생성
import { Injectable } from '@angular/core';

@Injectable()
export class MissionService {
    getMissions() {
        return MISSIONS; 
    }
}

const MISSIONS = [
    { id: 1, name: "홍길동" },
    { id: 2, name: "백두산" },
    { id: 3, name: "임꺽정" },
];
