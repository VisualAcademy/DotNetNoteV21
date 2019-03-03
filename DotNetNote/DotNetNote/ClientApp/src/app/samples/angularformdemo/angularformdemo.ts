// 앵귤러 템플릿 기반 폼 생성 및 폼의 값을 컴포넌트로 전달해서 사용하기 
import { Component } from '@angular/core';

@Component({
    selector: "angularformdemo",
    templateUrl: "./angularformdemo.html" 
})
export class AngularFormDemo {
    //goodsName: string = "좋은 상품";
    //goodsDescription: string;

    btnSave_Click(frmGoods: any) {
        let goods = frmGoods as GoodsBase;
        console.log(`${goods.goodsName} - ${goods.goodsDescription}`);
    }
}

class GoodsBase {
    goodsName: string;
    goodsDescription: string; 
}
