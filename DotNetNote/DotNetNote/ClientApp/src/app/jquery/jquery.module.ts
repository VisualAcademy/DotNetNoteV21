import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JqueryRoutingModule } from './jquery-routing.module';
import { JqueryComponent } from './jquery.component';
import { JqueryPluginComponent } from './jquery-plugin.component';
import { JqueryColorComponent } from './jquery-color.component';
import { JqueryAnimateComponent } from './jquery-animate.component';
import { JquerySlideToggleComponent } from './jquery.slidetoggle.component';

@NgModule({
  imports: [
    CommonModule,
    JqueryRoutingModule
  ],
  declarations: [
      JqueryComponent,
      JqueryPluginComponent,
      JqueryColorComponent,
      JqueryAnimateComponent,
      JquerySlideToggleComponent] 
})
export class JqueryModule { }
