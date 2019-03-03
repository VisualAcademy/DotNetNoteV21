// 뷰 모델(ViewModel)

// 인터페이스: 테이블 => C# 모델 클래스 => TS 인터페이스 
// C#에서의 인터페이스는 IHero 스타일이지만, Angualr에서는 IHero 대신에 Hero를 사용해도 무관
export interface IHero {
    id: number;
    name: string;
    icon: string;
    created: string; 
}

// 모델 클래스
export class HeroModel {
    constructor(public id: number, public name: string, public icon: string, public created: string) {
    }
}

// 페이징 처리를 위한 한번에 2개의 정보를 반환하는 뷰 모델 인터페이스
export interface IPagedViewModel<T> {
    totalRecordCount: number;
    records: T; 
}
