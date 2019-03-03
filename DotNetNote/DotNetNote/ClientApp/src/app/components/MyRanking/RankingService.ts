import { Injectable } from '@angular/core';

import { IRanking } from './IRanking';

@Injectable()
export class RankingService {


    public getRankings(): IRanking[] {
        return [
            { id: 1, name: "홍길동", rank: 1, rankImage: "One.gif" },
            { id: 2, name: "백두산", rank: 2, rankImage: "Two.gif" },
            { id: 3, name: "임꺽정", rank: 3, rankImage: "Three.gif" },
            { id: 4, name: "한라산", rank: 4, rankImage: "" },
        ];
    };

    private rankings: IRanking[];
}
