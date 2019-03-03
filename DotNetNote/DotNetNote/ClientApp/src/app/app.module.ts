import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'; // import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

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

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,

    IdeaComponent, IdeasComponent, IdeaAppComponent,
    OutputParent, OutputChild,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule, HttpModule, 
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },

      { path: 'IdeaManager', component: IdeaComponent }, // 아이디어 관리자(입출력 연습)
      { path: 'ideas', component: IdeasComponent },      // 아이디어 관리자(입출력 연습)
      { path: 'IdeaApp', component: IdeaAppComponent },  // 아이디어 관리자 2018

      { path: 'OutputDemo', component: OutputParent },

    ])
  ],
  providers: [
    IdeaDataService, IdeasDataService, IdeaAppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
