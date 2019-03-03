import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SamplesComponent } from './samples.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { ViewencapsulationComponent } from './viewencapsulation/viewencapsulation.component';
import { AnimationSmallBigComponent } from './animation-small-big/animation-small-big.component';
import { ToastrComponent } from './toastr/toastr.component';
import { SpeakersComponent } from "./speakers/speakers.component";
import { SamplesContactComponent } from './contact/samples.contact.component';
import { QuickStartComponent } from './quickstart/quickstart.component';
import { AngularHelloWorldComponent } from "./angular-helloworld/angular-helloworld.component";
import { AngularFormDemo } from './angularformdemo/angularformdemo';
import { NgIfNgForComponent } from './ngifngfor/ngifngfor.component';
import { ViewchildDemoComponent } from './viewchild-demo/viewchild-demo.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: '샘플'
        },
        children: [
            { path: '', component: SamplesComponent },
            { path: 'angularformdemo', component: AngularFormDemo },
            { path: 'speakers', component: SpeakersComponent },
            { path: 'ngstyle', component: NgstyleComponent },
            { path: 'ngif', component: NgifComponent },
            { path: 'ngfor', component: NgforComponent },
            { path: 'ngifngfor', component: NgIfNgForComponent },
            { path: 'viewencapsulation', component: ViewencapsulationComponent },
            { path: 'animation-small-big', component: AnimationSmallBigComponent },
            { path: 'toastr', component: ToastrComponent },
            { path: 'contact', component: SamplesContactComponent },
            { path: 'quickstart', component: QuickStartComponent },
            { path: 'helloworld', component: AngularHelloWorldComponent },
            { path: 'viewchild-demo', component: ViewchildDemoComponent },
            //{ path: 'medal', component: MedalViewComponent }       
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SamplesRoutingModule { }
