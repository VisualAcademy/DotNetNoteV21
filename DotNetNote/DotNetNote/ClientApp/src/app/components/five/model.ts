// 인터페이스: 테이블 => C# 모델 클래스 => TS 인터페이스 
export interface IFive {
    id: number;
    note: string;
}

// 모델 클래스 
export class FiveModel {
    constructor(public id: number, public note: string) {
    }
}

// 한번에 2개의 정보를 반환하는 뷰 모델 인터페이스 
export interface IPagedViewModel<T> {
    totalRecordCount: number; 
    records: T; 
}
