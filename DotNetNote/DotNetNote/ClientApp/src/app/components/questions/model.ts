// 뷰 모델(ViewModel) 

// 인터페이스: 테이블 => C# 모델 클래스 => TS 인터페이스
export interface IQuestion {
    id: number;
    title: string; 
}

// 모델 클래스
export class QuestionModel {
    constructor(public id: number, public title: string) {
    }
}

// 페이징 처리를 위한 한번에 2개의 정보를 반환하는 뷰 모델 인터페이스
export interface IPagedViewModel<T> {
    totalRecordCount: number; 
    records: T; 
}
