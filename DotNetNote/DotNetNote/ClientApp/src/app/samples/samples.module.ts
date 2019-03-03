import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SamplesRoutingModule } from './samples-routing.module';
import { SamplesComponent } from './samples.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { ViewencapsulationComponent } from './viewencapsulation/viewencapsulation.component';
import { LocalreferenceComponent } from './localreference/localreference.component';
import { ViewchildDemoComponent } from './viewchild-demo/viewchild-demo.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { NgonchangesDemoComponent } from './ngonchanges-demo/ngonchanges-demo.component';
import { NgoninitDemoComponent } from './ngoninit-demo/ngoninit-demo.component';
import { NgdocheckDemoComponent } from './ngdocheck-demo/ngdocheck-demo.component';
import { NgaftercontentinitDemoComponent } from './ngaftercontentinit-demo/ngaftercontentinit-demo.component';
import { NgafterviewinitDemoComponent } from './ngafterviewinit-demo/ngafterviewinit-demo.component';
import { NgondestroyDemoComponent } from './ngondestroy-demo/ngondestroy-demo.component';
import { AnimationSmallBigComponent } from './animation-small-big/animation-small-big.component';
import { ToastrComponent } from './toastr/toastr.component';
import { ToastrService } from '../common/toastr.service';
import { SpeakersComponent } from './speakers/speakers.component';
import { SpeakersService } from './speakers/speakers.service';
import { SamplesContactComponent } from './contact/samples.contact.component';
import { QuickStartComponent } from './quickstart/quickstart.component';
import { AngularHelloWorldComponent } from "./angular-helloworld/angular-helloworld.component";
import { AngularFormDemo } from './angularformdemo/angularformdemo';
import { NgIfNgForComponent } from './ngifngfor/ngifngfor.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SamplesRoutingModule
    ],
    declarations: [
        SamplesComponent,
        NgstyleComponent,
        NgclassComponent,
        NgifComponent,
        NgforComponent,
        ViewencapsulationComponent,
        LocalreferenceComponent,
        ViewchildDemoComponent,
        LifecycleComponent,
        NgonchangesDemoComponent,
        NgoninitDemoComponent,
        NgdocheckDemoComponent,
        NgaftercontentinitDemoComponent,
        NgafterviewinitDemoComponent,
        NgondestroyDemoComponent,
        AnimationSmallBigComponent,
        ToastrComponent,
        SpeakersComponent,
        SamplesContactComponent,
        QuickStartComponent,
        AngularHelloWorldComponent,
        AngularFormDemo,
        NgIfNgForComponent,
    ],
    providers: [
        ToastrService,
        SpeakersService,
    ]
})
export class SamplesModule { }
