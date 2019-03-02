import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from "./company.component";
import { CompanyMemberComponent } from "./company-member.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";

const routes: Routes = [
  {
    path: '', 
    component: CompanyComponent,
    data: {
      title: 'Company'      
    },
    children: [
        { path: 'member', component: CompanyMemberComponent },
        { path: 'portfolio', component: PortfolioComponent }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
