
// 게시판 글 모델 클래스
export class Note {
    constructor(
        public name: string,
        public title: string,
        public content: string,

        public encoding: string, 

        public isRemember: boolean,
        public isPinned: string 
    ) {
    }
}

