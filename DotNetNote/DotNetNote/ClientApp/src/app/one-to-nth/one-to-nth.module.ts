import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneToNthRoutingModule } from './one-to-nth-routing.module';

import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { ThreeDataService } from './three/three-data.service';
import { TwoDataService } from './two/two-data.service';
import { OneDataService } from './one/one-data.service';
import { FourComponent } from './four/four.component';
import { FourDataService } from './four/four-data.service';
import { FourGridComponent } from './four/four-grid.component';
import { FourDetailComponent } from './four/four-detail.component';
import { FourModifyComponent } from './four/four-modify.component';
import { FourDeleteComponent } from './four/four-delete.component';
import { FourWriteComponent } from './four/four-write.component';
import { FourDetailGuard } from './four/four-detail.guard';
import { FiveComponent } from './five/five.component';
import { FiveDataService } from './five/five-data.service';
import { FiveWriteComponent } from './five/five-write.component';
import { FiveGridComponent } from './five/five-grid.component';
import { FiveDetailComponent } from './five/five-detail.component';
import { FiveModifyComponent } from './five/five-modify.component';
import { FiveEditComponent } from './five/five-edit.component';
import { FiveDeleteComponent } from './five/five-delete.component';
import { FiveDetailGuard } from './five/five-detail.guard';

@NgModule({
  imports: [
    CommonModule,
    OneToNthRoutingModule
  ],
  declarations: [
    OneComponent, TwoComponent, ThreeComponent, FourComponent, FourGridComponent, FourDetailComponent, FourModifyComponent, FourDeleteComponent, FourWriteComponent, 
    FiveComponent, FiveWriteComponent, FiveGridComponent, FiveDetailComponent, FiveModifyComponent, FiveEditComponent, FiveDeleteComponent
  ],
  providers: [
    OneDataService, TwoDataService, ThreeDataService, FourDataService, FourDetailGuard, FiveDataService, FiveDetailGuard
  ]
})
export class OneToNthModule { }
