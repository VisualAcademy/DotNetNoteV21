// ISignBase 인터페이스 => SignBase 클래스(SignBases 테이블)와 일대일
export interface ISignBase {
    signId: number;
    username: string; 
    password: string;
    name: string;
    email: string;
}
