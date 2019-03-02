// Posts 테이블과 일대일인 모델 클래스
export interface IPost {
    postId: number;     // PostId
    title: string;      // Title
    content: string;    // Content
    created: string;    // Created

    blogId: number;     // BlogId => IBlog
}
