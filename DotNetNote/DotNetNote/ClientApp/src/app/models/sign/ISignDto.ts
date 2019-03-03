// ISignDto 인터페이스 => SignDto로 넘어온 JSON 값 제약
export interface ISignDto {
    signId: number;
    token: string; 
    email: string;
}
