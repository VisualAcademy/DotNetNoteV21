import { Injectable } from '@angular/core';

import { Speaker } from './speaker'

@Injectable()
export class SpeakersService {
    constructor() {
    }

    getSpeakers(): Speaker[] {
        return [
            new Speaker(4, "홍길동"),
            new Speaker(5, "백두산"),
            new Speaker(6, "임꺽정")
        ];
    }
}
