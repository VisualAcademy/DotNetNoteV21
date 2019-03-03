import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { AnModule } from '../an/an.module'; // 모듈 등록
import { TechListComponent } from '../components/techlist/techlist.component';
import { SiteListComponent } from '../components/sitelist/sitelist.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
      SharedModule, 
      CommonModule,
      AnModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, AboutComponent, ContactComponent, TechListComponent, SiteListComponent]
})
export class HomeModule { }
