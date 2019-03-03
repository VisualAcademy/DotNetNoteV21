import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
  {
    path: '',
    //component: HomeComponent,
    data: {
      title: 'Home'
    },
    children: [
      { path: '', component : HomeComponent },
      { path: 'about', component : AboutComponent },
      { path: 'contact', component : ContactComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
