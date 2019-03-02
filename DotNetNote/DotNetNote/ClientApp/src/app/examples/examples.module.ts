import { NgModule } from '@angular/core';

// 내장 모듈 등록
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// 사용자 정의 모듈 등록
import { ExamplesRoutingModule } from './examples.routing.module';

// 사용자 정의 컴포넌트 등록
import { ExamplesComponent } from './examples.component';
import { SubUrlComponent } from './components/suburl.component';
import { StronglyTypedComponent } from './stonglytyped/stonglytyped.component';
import { CategoryComponent } from './category/category.component';
import { FileUploadComponent } from './fileupload/fileupload.component';
import { FileUploadTestComponent } from './fileupload/fileuploadtest.component';
import { FileUploadTestFinalComponent } from './fileupload/fileuploadtestfinal.component';
import { ImageUploadComponent } from './imageupload/imageupload.component';
import { ImageUploadFormComponent } from './imageupload/imageuploadform.component';
import { ImageUploadFormProcessComponent } from './imageupload/imageuploadformprocess.component';
import { AuthComponent } from './auth/auth.component';

// 사용자 정의 서비스 등록
import { CategoryDataService } from './category/category.data.service';
import { ImageUploadFormProcessService } from './imageupload/imageuploadformprocess.service';
import { AuthService } from './auth/auth.service';

@NgModule({
    // 모듈
    imports: [
        CommonModule, RouterModule, FormsModule, ReactiveFormsModule, HttpModule,
        ExamplesRoutingModule
    ],
    // 컴포넌트
    declarations: [
        ExamplesComponent,
        SubUrlComponent,
        StronglyTypedComponent,
        CategoryComponent, 
        FileUploadComponent,
        FileUploadTestComponent,
        FileUploadTestFinalComponent,
        ImageUploadComponent,
        ImageUploadFormComponent,
        ImageUploadFormProcessComponent,
        AuthComponent
    ],
    // 데이터 서비스, 가드 서비스
    providers: [
        CategoryDataService,
        ImageUploadFormProcessService,
        AuthService
    ]
})
export class ExamplesModule {

}
