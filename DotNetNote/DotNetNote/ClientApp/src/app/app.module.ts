//[!] 기본 모듈 포함
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'; // import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // ? 

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

//[!] 아이디어 관리자 
import { IdeaDataService } from './components/IdeaManager/IdeaDataService';
import { IdeaComponent } from './components/IdeaManager/IdeaComponent';

//[!] 아이디어 관리자
import { IdeasDataService } from './components/ideas/ideas.data.service';
import { IdeasComponent } from './components/ideas/ideas.component';

//[Angular 강의] IdeaApp: 아이디어 관리자 2018
import { IdeaAppComponent } from './components/IdeaApp/IdeaApp.component';
import { IdeaAppService } from './components/IdeaApp/IdeaApp.service';

// @Output 데모
import { OutputParent } from './components/OutputDemo/OutputParent';
import { OutputChild } from './components/OutputDemo/OutputChild';

// 서비스 데모
import { ServiceDemoComponent } from './components/ServiceDemo/ServiceDemoComponent';
import { ServiceDemoService } from './components/ServiceDemo/ServiceDemoService';
import { ObservableDemoComponent } from './components/ObservableDemo/ObservableDemoComponent';

import { PromiseDemoComponent } from './components/PromiseDemo/PromiseDemoComponent';
import { PromiseDemoService } from './components/PromiseDemo/PromiseDemoService';


import { ObservableDemoService } from './components/ObservableDemo/ObservableDemoService';

//[!] RoutingDemo 관련 컴포넌트 등록
import { RoutingList } from './components/routingdemo/routing-list.component';
import { RoutingView } from './components/routingdemo/routing-view.component';
import { RoutingViewGuard } from './components/routingdemo/routing-view-guard.service';

//import { TechListComponent } from './components/techlist/techlist.component';
//import { SiteListComponent } from './components/sitelist/sitelist.component';

import {
  QuestionDataService,
  QuestionListComponent,
  QuestionGridComponent,
  QuestionWriteComponent,
  QuestionDetailComponent,
  QuestionGuardService,
  QuestionEditComponent,
  QuestionDeleteComponent,
  QuestionEditReactiveComponent
}
  from './components/questions/index';


import { SharedModule } from './shared/shared.module';
import { AnPagingHelperComponent } from './components/shared/AnPagingHelperComponent';

//[!] 템플릿 기반 폼 사용, 리액티브 기반 폼 사용
// 양방향 바인딩을 사용하려면 FormsModule을 필수로 포함해야 한다. 
import { ReactiveFormsModule } from '@angular/forms';
import { GoodsModule } from './goods/goods.module';
import { LoginPartialComponent } from './views/shared/_login-partial.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout.component';


// 사용자 정의 컴포넌트 등록
import { VersionComponent } from './components/version/version.component';
import { WebCampComponent } from './components/webcamp/webcamp.component';


// 레이아웃 관련 컴포넌트 등록
import { SiteLayoutComponent } from './views/shared/site.layout.component';
import { EmptyLayoutComponent } from './views/shared/empty.layout.component';


// 모듈 등록, 컴포넌트 등록, 서비스 등록
import { AnModule } from './an/an.module'; // 모듈 등록

// TODO 리스트
import { ToDoAppComponent } from './components/todolist/todoapp.component';
import { ToDoListComponent } from './components/todolist/todolist.component';
import { ToDoCreateComponent } from './components/todolist/todocreate.component';
import { ToDoDataService } from './components/todolist/tododata.service';

import { TopRankingComponent } from './components/shared/TopRanking.component';
import { MyRankingComponent } from './components/MyRanking/MyRanking.component';

import { OneComponent } from './components/OneComponent/OneComponent';
import { OneDataService } from './components/OneComponent/OneDataService';

import { TwoComponent } from './components/TwoComponent/TwoComponent';
import { TwoDataService } from './components/TwoComponent/TwoDataService';
import { ThreeComponent } from './components/ThreeComponent/ThreeComponent';
import { ThreeDataService } from './components/ThreeComponent/ThreeDataService';
//[1] 기본
//import { FourComponent } from './components/four/four.component';
//import { FourDataService } from './components/four/four.dataservice'; 

//[2] 한통
import {
  FourComponent, FourDataService,
  FourDetailComponent, FourDetailGuard, FourGridComponent,
  FourDeleteComponent, FourWriteComponent,
  FourModifyComponent
}
  from './components/four/index';

import {
  FiveListComponent, FiveDataService, FiveGridComponent,
  FiveWriteComponent, FiveDetailComponent, FiveDetailGuard,
  FiveEditComponent, FiveDeleteComponent
}
  from './components/five/index';

//import { NavMenuComponent } from './components/navmenu/navmenu.component';

// 공통으로 사용될 뷰 컴포넌트 
import { MaximComponent } from './components/Maxim/MaximComponent';
import { MaximDetailComponent } from './components/Maxim/MaximDetailComponent';

// 데모
import { IntroComponent } from './components/intro/intro.component';
//[Angular 강의] Demo 컴포넌트 생성  
import { DemoComponent } from './components/demo/demo.component';

import { Demo_Data_BoundComponent } from './components/demo/demo_data_bound.component';
import { FormDemoSimpleFormComponent } from './components/demo_form/FormDemoSimpleForm';
import { FormValidationDemoComponent } from './components/demo_form/FormValidationDemo';
import { SelectOptionComponent } from './components/demo/selectoption.component';
import { InputDemoComponent } from './components/demo/InputDemoComponent';
import { DataBindingDemo } from './components/demo/DataBindingDemo';

import { EventsListComponent } from './components/events/events-list.component';
import { EventThumbnailComponent } from './components/events/event-thumbnail.component';




//[Angular 강의] Points 테이블부터 Point 컴포넌트까지 JSON 데이터를 읽어다가 앵귤러 뷰 컴포넌트에 출력하기 데모
import { PointModule } from "./modules/point/point.module";







// 레이아웃 모듈 적용
import { LayoutBaseComponent } from './layouts/layout-base.component';
import { LayoutFourComponent } from './layouts/layout-four.component';


import { CoursesComponent } from './components/courses/courses.component';
import { CoursesDataService } from './components/courses/courses.dataservice';

import { FiveStarComponent } from './components/shared/five-star.component';
import { CheckAge } from './components/CheckAge/CheckAge';

import { AnimationBasicComponent } from './components/animation/animation.basic.component';
import { CoinViewerComponent } from './coin-viewer/coinviewer.component';
import { CoinGraphComponent } from './coin-viewer/coingraph.component';
import { GradesViewComponent, GradesGraphComponent } from './grades/index';






@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,

    SiteLayoutComponent,
    EmptyLayoutComponent,
    DashboardLayoutComponent,
    NavMenuComponent,

    IdeaComponent, IdeasComponent, IdeaAppComponent,
    OutputParent, OutputChild,
    PromiseDemoComponent,
    ServiceDemoComponent, ObservableDemoComponent,
    RoutingList, RoutingView, // 라우팅 데모 관련


    QuestionListComponent,
    QuestionGridComponent, QuestionWriteComponent,
    QuestionDetailComponent, QuestionEditComponent, QuestionDeleteComponent,
    QuestionEditReactiveComponent,
    AnPagingHelperComponent,
    WebCampComponent, VersionComponent,

    // TODO 리스트 
    ToDoAppComponent, ToDoListComponent, ToDoCreateComponent,
    TopRankingComponent, MyRankingComponent,

    // One, Two, Three, Four 
    OneComponent, TwoComponent, ThreeComponent,
    FourComponent, FourDetailComponent, FourGridComponent,
    FourDeleteComponent, FourWriteComponent,
    FourModifyComponent,

    FiveListComponent, FiveGridComponent, FiveWriteComponent,
    FiveDetailComponent, FiveEditComponent, FiveDeleteComponent,
    MaximComponent, MaximDetailComponent,
    // 데모
    DemoComponent,
    IntroComponent,
    InputDemoComponent,
    SelectOptionComponent,
    DataBindingDemo,
    Demo_Data_BoundComponent,
    FormDemoSimpleFormComponent, FormValidationDemoComponent,
    EventsListComponent, EventThumbnailComponent,

    LayoutBaseComponent, LayoutFourComponent, // 레이아웃 관련
    CoinViewerComponent, CoinGraphComponent, GradesViewComponent, GradesGraphComponent,
    CoursesComponent,

    FiveStarComponent,

    CheckAge, 
    //MainSummaryComponent,
    AnimationBasicComponent,
    LoginPartialComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule, HttpModule, 
    FormsModule,
    CommonModule, 

    SharedModule,
    PointModule, 
    ReactiveFormsModule,
    AnModule,
    GoodsModule, 

    RouterModule.forRoot([

      { path: '', component: HomeComponent, pathMatch: 'full' },

      // Home 모듈을 독립(기능) 모듈로 Lazy 로딩 방식으로 읽어오기 
      // // <app asp-prerender-module="" /> asp-prerender-module 제거할 것
      // HomeModule: Home, About, Contact
      {
        path: '',
        component: SiteLayoutComponent,
        children: [
          {
            path: 'home', loadChildren: './home/home.module#HomeModule'
          },
          {
            path: 'samples', loadChildren: './samples/samples.module#SamplesModule'
          },
          {
            path: 'mission1', loadChildren: './mission1/mission1.module#Mission1Module'
          },
          {
            path: 'mission2', loadChildren: './mission2/mission2.module#Mission2Module'
          }
        ]
      },

      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'version', component: VersionComponent },
      // TODO 리스트
      { path: 'todo', component: ToDoAppComponent },          
      { path: 'MyRanking', component: MyRankingComponent },

      { path: 'IdeaManager', component: IdeaComponent }, // 아이디어 관리자(입출력 연습)
      { path: 'ideas', component: IdeasComponent },      // 아이디어 관리자(입출력 연습)
      { path: 'IdeaApp', component: IdeaAppComponent },  // 아이디어 관리자 2018

      { path: 'OutputDemo', component: OutputParent },
      { path: 'PromiseDemo', component: PromiseDemoComponent },
      { path: 'ServiceDemo', component: ServiceDemoComponent },

      { path: 'ObservableDemo', component: ObservableDemoComponent },

      // 데모
      { path: 'demo', component: DemoComponent },
      { path: 'intro', component: IntroComponent },


      // 1, 2, 3, 4, ...
      { path: 'OneComponent', component: OneComponent },
      { path: 'TwoComponent', component: TwoComponent },
      { path: 'ThreeComponent', component: ThreeComponent },
      { path: 'four', component: FourComponent },
      { path: 'fourwrite', component: FourWriteComponent },
      { path: 'fourdetail/:id', component: FourDetailComponent, canActivate: [FourDetailGuard] },
      { path: 'fourmodify/:id', component: FourModifyComponent, canActivate: [FourDetailGuard] },
      { path: 'fourdelete/:id', component: FourDeleteComponent, canActivate: [FourDetailGuard] },
      { path: 'five', component: FiveListComponent },
      { path: 'fivewrite', component: FiveWriteComponent },
      { path: 'fivedetail/:id', component: FiveDetailComponent, canActivate: [FiveDetailGuard] },
      { path: 'fiveedit/:id', component: FiveEditComponent, canActivate: [FiveDetailGuard] },
      { path: 'fivedelete/:id', component: FiveDeleteComponent, canActivate: [FiveDetailGuard] },
      { path: 'Maxim', component: MaximComponent },
      { path: 'MaximDetail/:id', component: MaximDetailComponent },


      { path: 'InputDemoComponent', component: InputDemoComponent },
      { path: 'DataBindingDemo', component: DataBindingDemo },

      { path: 'd', component: Demo_Data_BoundComponent },
      { path: 'e', component: EventsListComponent },
      { path: 'FormDemoSimpleForm', component: FormDemoSimpleFormComponent },
      { path: 'FormValidationDemo', component: FormValidationDemoComponent },


      // 라우팅 데모 관련
      { path: 'routinglist', component: RoutingList },
      {
        path: 'routingview/:id', component: RoutingView,
        canActivate: [RoutingViewGuard] // 가드 설치 
      },


      // <Question> : 문제
      { path: 'question', component: QuestionListComponent },
      { path: 'questionwrite', component: QuestionWriteComponent },
      { path: 'questiondetail/:id', component: QuestionDetailComponent, canActivate: [QuestionGuardService] },

      //[1] 템플릿 기반 폼 사용
      //{ path: 'questionedit/:id', component: QuestionEditComponent, canActivate: [QuestionGuardService] },
      //[2] 리액티브 기반 폼 사용
      { path: 'questionedit/:id', component: QuestionEditReactiveComponent, canActivate: [QuestionGuardService] },
      { path: 'questiondelete/:id', component: QuestionDeleteComponent, canActivate: [QuestionGuardService] },
            // </Question>

      // Lazy Loading 
      {
        path: 'admin', loadChildren: './admin/admin.module#AdminModule'
      },
      // Company 모듈
      {
        path: 'company', loadChildren: './company/company.module#CompanyModule'
      },
      // Lazy Loading
      {
        path: 'jquery', loadChildren: './jquery/jquery.module#JqueryModule'
      },
      { path: 'coinviewer', component: CoinViewerComponent }, // 코인 뷰어
      { path: 'grades', component: GradesViewComponent },
      { path: 'selectoption', component: SelectOptionComponent },
      { path: 'animationbasic', component: AnimationBasicComponent },
      { path: 'CheckAge', component: CheckAge },

      //[!] angularcore 모듈을 지연(Lazy) 로딩으로 실행하기 
      {
        path: 'angularcore',
        component: SiteLayoutComponent,
        children: [
          {
            path: '',
            loadChildren: './angularcore/angularcore.module#AngularCoreModule'
          }
        ]
      },



      {
        path: 'sign',
        component: SiteLayoutComponent,
        children: [
          {
            path: '',
            loadChildren: './sign/sign.module#SignModule'
          }
        ]
      },

      {
        path: 'sales',
        component: DashboardLayoutComponent,
        children: [
          {
            path: '',
            loadChildren: './sales/sales.module#SalesModule'
          }
        ]
      },
      {
        path: 'login',
        component: EmptyLayoutComponent,
        children: [
          {
            path: '',
            loadChildren: './login/login.module#LoginModule'
          }
        ]
      },      



      //[!] examples 모듈을 지연(Lazy) 로딩으로 실행하기
      {
        path: 'examples',
        component: SiteLayoutComponent,
        children: [
          {
            path: '',
            loadChildren: './examples/examples.module#ExamplesModule'
          }
        ]
      },

      //[!] Heroes 모듈을 Lazy Loading 방식으로 변경
      {
        path: '',
        component: SiteLayoutComponent,
        children: [
          {
            path: '',
            loadChildren: './heroes/heroes.module#HeroesModule'
          }
        ]
      },

      // 서로 다른 레이아웃을 적용하는 예
      {
        path: 'mission3',
        component: LayoutBaseComponent, // 레이아웃을 따로 지정
        children: [
          {
            path: '',
            loadChildren: './mission3/mission3.module#Mission3Module'
          }
        ]
      },
      {
        path: 'mission4',
        component: LayoutFourComponent, // 레이아웃을 따로 지정
        children: [
          {
            path: '',
            loadChildren: './mission4/mission4.module#Mission4Module'
          }
        ]
      },
      {
        path: 'mission5',
        component: LayoutBaseComponent, // 레이아웃을 따로 지정
        children: [
          {
            path: '',
            loadChildren: './mission5/mission5.module#Mission5Module'
          }
        ]
      },




      //[!] blogposts 모듈을 지연(Lazy) 로딩으로 실행하기 
      {
        path: 'blogposts',
        component: EmptyLayoutComponent,
        children: [
          {
            path: '',
            loadChildren: './blogposts/blogposts.module#BlogPostsModule'
          }
        ]
      },


      //[!] demos 모듈을 지연(Lazy) 로딩으로 실행하기 
      {
        path: 'demos',
        component: SiteLayoutComponent,
        children: [
          {
            path: '',
            loadChildren: './demos/demos.module#DemosModule'
          }
        ]
      },


      // 사용자 정의 레이아웃이 적용된 버전 컴포넌트: EmptyLayoutComponent
      {
        path: '',
        component: EmptyLayoutComponent,
        children: [
          {
            // 버전 
            path: 'version',
            component: VersionComponent
          }
        ]
      },

      // 사용자 정의 레이아웃이 적용된 버전 컴포넌트: SiteLayoutComponent
      {
        path: '',
        component: SiteLayoutComponent,
        children: [
          {
            // 웹캠프
            path: 'webcamp',
            component: WebCampComponent
          },
        ]
      },

      { path: '**', redirectTo: 'home' }

    ]),

    //CharactersModule,
    //NotesModule // 독립 모듈 등록(순서 주의)

  ],
  providers: [
    IdeaDataService, IdeasDataService, IdeaAppService, 
    PromiseDemoService, ServiceDemoService, ObservableDemoService,
    RoutingViewGuard, // RoutingDemo 관련(가드 서비스)

    QuestionDataService, QuestionGuardService,
    ToDoDataService,

    // 서비스 프로바이더 등록
    OneDataService, TwoDataService, ThreeDataService,
    FourDataService, FourDetailGuard, FiveDataService, FiveDetailGuard,
    //MissionService,
    //TestDataService,
    CoursesDataService,
    //LoggerService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
