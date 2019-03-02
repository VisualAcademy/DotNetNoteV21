import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CompanyMemberComponent } from './company-member.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule
  ],
  declarations: [CompanyComponent, CompanyMemberComponent, PortfolioComponent]
})
export class CompanyModule { }
