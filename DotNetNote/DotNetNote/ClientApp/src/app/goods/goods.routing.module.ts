import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Goods 관련 컴포넌트 
import { GoodsComponent } from './components/goods.component';

// 라우팅 정보 상수 생성
const routes: Routes = [
    {
        path: 'goods',
        component: GoodsComponent,
        data: {
            title: '제품 리스트'
        }
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class GoodsRoutingModule {

}
